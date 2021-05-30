const about =  document.querySelector('#about')
const contact =  document.querySelector('#contact')
const aboutContent =  document.querySelector('#about-content')
const contactContent =  document.querySelector('#contact-content')


about.addEventListener('click',()=>{

  const aboutBox=  new WinBox({
      title:'About Me',
      width:'350px',
      height:'400px',
      top:'10',
      right:'50',
      bottom:'50',
      left:'10',
      mount: aboutContent,
      onfocus: function(){
          this.setBackground('#00aa00')
      },
      onblur: function(){
          this.setBackground('#777')
      },
  })
})
contact.addEventListener('click',()=>{

    const contactBox=  new WinBox({
        title:'Contact Me',
        width:'350px',
        height:'400px',
        top:'30',
        right:'50',
        bottom:'50',
        left:'21',
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
  })