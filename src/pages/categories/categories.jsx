import "../scss/categ.css";
import img1 from "../../assets/images/imgOfCategories/images(1).jpg"
import img2 from "../../assets/images/imgOfCategories/images(2).jpg"

 function Categories(){
return(
<>
<div className="container">
<div className="row">
<div className="p-3 col-lg-4">
    <img src={img1} alt=""/>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
    </p>
</div>
<div className="p-3 col-lg-4">
    <img src={img2} alt=""/>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
    </p>
</div>
<div className="p-3 col-lg-4">
    <img src={img2} alt=""/>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
    </p>
</div>
</div>
</div>
</>
)
 }
 export default Categories;