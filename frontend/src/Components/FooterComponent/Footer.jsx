const Footer = () => {
    return (
      <footer style={footerStyle}>
        <div style={contentbox}>
          <div style={leftText}>
            <p>Copyright&copy; JigsAcademy Bengaluru India</p>
          </div>
          <div style={rightText}>
            <p>About Contact us </p>
          </div>
        </div>
      </footer>
    );
  };
  
  const footerStyle = {
    background: '#896A53',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    marginTop: '1rem', // Adjust as needed
  };
  
  const contentbox = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%',
  };
  const leftText = {
    alignSelf: 'flex-start',
  };
  
  const rightText = {
    alignSelf: 'flex-end',  
  };
  
  export default Footer;
  