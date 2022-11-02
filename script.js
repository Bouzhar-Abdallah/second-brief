
document.getElementById("mini-menu").addEventListener("click", 
showMobileMenu
);
function showMobileMenu () {
    document.getElementById("titles-mobile").style.display = "block";


}


/* jjjjjjjj */

document.getElementById("mini-menu").addEventListener("click", 
showMobileMenu
);
function showMobileMenu () {
    document.getElementById("titles-mobile").style.display = "block";


}


const openContainerButtons=document.getElementById("open-form")

openContainerButtons.addEventListener("click",  writeHtml)

const bg=document.getElementById('bg')




function writeHtml()
    
{
  document.body.innerHTML += 
  ` 
  <link rel="stylesheet" href="./style-form.css">
  <div class="container form"  id="container">
  
      <div class="containerbg"></div>
      <div class="horizontal">
          <figure><img src="./logo/Unsdvsvtitled-1.png" alt="" srcset=""></figure>
          <div class="vertical">
                  <div>
                  <label for="" >Full Name :</label>
                  <input type="text">
              </div>
              <div>
                  <label for="" >E-mail :</label>
                  <input type="text">
              </div>
              <div>
                  <label for="" >Message :</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
          </div>

      </div>
      <div class="footer">
      <button  id="delete-form" onclick="container.remove();">Send</button>
      </div>
      <div class="bg" id="bg"></div>
      </div>
      
  </div>`;

};

function deleteHtml(container)
    
{
    
 container.remove();
};