exports.getIndexPage = (req,res)=>{
  res.render('index',{
    page_name:'index'
  })
}

exports.getAboutPage =  (req,res)=>{
  res.render('about',{
    page_name: 'about'
  })
}

exports.getRegisterPage =  (req,res)=>{
  res.render('register',{
    page_name: 'register'
  })
}
exports.getLoginPage =  (req,res)=>{
  res.render('login',{
    page_name: 'login'
  })
}

exports.getContactPage =  (req,res)=>{
  res.render('contact',{
    page_name: 'contact'
  })
}

exports.getPricingPage =  (req,res)=>{
  res.render('pricing',{
    page_name: 'pricing'
  })
}
