var images=["https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg","https://img.freepik.com/free-vector/happy-fatherF-s-day_24908-59789.jpg?size=338&ext=jpg&ga=GA1.2.1692877762.1626652800","https://image.shutterstock.com/image-vector/mother-kids-260nw-519721258.jpg","https://img.favpng.com/7/1/13/cartoon-stock-photography-character-png-favpng-MN63iEE8fezhFewDHfbXB59J7.jpg","https://image.shutterstock.com/image-illustration/cute-style-young-mother-posing-260nw-561868150.jpg","https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg","https://graphicriver.img.customer.envatousercontent.com/files/301807601/preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=18fc17bb213c0ed7d66d4271ee4245b9","https://thumbs.dreamstime.com/z/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg","https://media.istockphoto.com/vectors/happy-girl-sisters-hugging-2-vector-id1149523080?k=6&m=1149523080&s=612x612&w=0&h=bspHd3lMN7Bs67NXqKvwmk8QjrOtAPOmNaYvbmR9qm4=","https://i.pinimg.com/originals/61/2c/b7/612cb73d4284b091530ef6dda0993021.jpg","https://image.shutterstock.com/image-vector/illustration-cute-baby-boy-clapping-260nw-102969851.jpg"];
var names=["family book","yogender goyal","mamta goyal","tarun goyal","shewta goyal","chandrawati goyal","ram kumar goyal","janhavi goyal","poorvi goyal and priyanshi goyal","rudra goyal","vansh goyal"];
var i=0;
function next()
{
    var updated_image=images[i];
    var updated_names=names[i];
    i++;
    document.getElementById("family_img").src=updated_image;
    document.getElementById("family_name").innerHTML=updated_names;

}