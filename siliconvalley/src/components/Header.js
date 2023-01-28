function Header() {
   return (
       <div className="padT4 padB4">
           <div className="container mobile-container">
               <div className="d-flex justify-content-between">
                   <div>
                       <img alt="SVVC Home Page" src="/images/SVCClogo.png"/>
                   </div>
                   <div className="Light">
                       <h4 className="header-title">
                           Silicon Valley Code Camp
                       </h4>
                   </div>
                   <div className="text-dark">
                       Hello Mr. Speaker &nbsp;&nbsp;
                       <span>
                           <a href="/logout">Sign-out</a>
                       </span>
                   </div>
               </div>
           </div>
       </div>
   )
}
export default Header;
