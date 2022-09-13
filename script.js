document.onscroll = () =>{
    if (window.scrollY > 0){
        document.queryselector('.header').classList.add('active');
    }else {
        document.queryselector('.header').classList.remove('active');
    }
};

document.onload = () =>{
    if (window.scrollY>0){
        document.queryselector('.header').classList.add('active');
    }else {
        document.queryselector('.header').classList.remove('active');
    }
};
