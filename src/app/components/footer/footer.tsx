import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='content'>
        <p className='title-green'>Slytherin <span className='title-white'>House</span></p>
        <p className='house-values'>PRIDE - AMBITION - CUNNING</p>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/suenoctisay/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/media-icons/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/suenoctisay/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/media-icons/instagram.png" alt="instagram" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=19982310114&text=Olá,%20vi%20seu%20perfil%20no%20GitHub%20e%20gostaria%20de%20conversar%20sobe%20seu%20portifólio." target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/media-icons/whatsapp.png" alt="whatsapp" />
        </a>
      </div>
      <div className="copiright">
        <p>Copiright © 2023-2025 <span>Suelen Santos</span>. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer