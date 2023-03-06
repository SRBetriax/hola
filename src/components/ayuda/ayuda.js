import { useState } from "react";
import ImgLogo from "../../icons/Sign/register/imgLogo";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Avatar from 'react-avatar-edit'



const Ayuda = () => {
  const [open, setOpen] = useState(false);
  const [imgCrop, setImgCrop] = useState(false)
  const [storeImage, setStoreImage] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgCrop(null)
  };

  const onCrop = (view) => {
    setImgCrop(view)
  }

  const onClose = () => {
    setImgCrop(null)
  }

  const saveImg = () => {
    setStoreImage([...storeImage, {imgCrop}])
    setOpen(false);
  }


    const profileImgShow = storeImage.map(item => item.imgCrop)
    localStorage.setItem('img' , JSON.stringify(profileImgShow));


  const getImg = () =>{
    const data = localStorage.getItem('img');
    return JSON.parse(data);
  }

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div className="profile-pic-container">
        <div className="step1-logo-img">
          {
            profileImgShow.length ? <img src={profileImgShow}/> : <ImgLogo />
          }
        
        </div>
        <div className="">
          <div className="tooltip-container">
            <p className="step1-profile-title">
              Foto de perfil empleado/apoderado
            </p>
          </div>
          <button
            type="button"
            className="step1-profile-btn"
            onClick={handleClickOpen}
          >
            Subir foto
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent children="image">
            <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
          
        />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={saveImg}
              >
                Aceptar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
