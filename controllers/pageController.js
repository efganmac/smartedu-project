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
