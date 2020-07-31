function scrollToElement(id) {
    var elmnt = document.getElementById(id);
    if (elmnt){
      console.log('scrolling:'+id);
      elmnt.scrollIntoView({'behavior':'smooth','block':'center','inline ':'start'});
    }
    
  }
  window.onscroll = () => {
  const nav = document.querySelector('#toggleable-nav');
  if(this.scrollY <= 100) {
    nav.className = 'toggleable-show'; 
  } else {
    nav.className = 'toggleable-hide';
  }
};
