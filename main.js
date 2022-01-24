function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PovpUM4vQ/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
 function gotResults(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
random_number_r = Math.floor(Math.random()*255)+1;
random_number_g = Math.floor(Math.random()*255)+1;
random_number_b = Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML='I can hear -'+results[0].label;
document.getElementById("result_confidence").innerHTML='Accuracy -'+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img=document.getElementById('dog');
img1=document.getElementById('lion');
img2=document.getElementById('tiger');
img3=document.getElementById('birds');
img4=document.getElementById('sheep');
img5=document.getElementById('elephant');
img6=document.getElementById('horse');
img7=document.getElementById('donkey');
img8=document.getElementById('cat');
img9=document.getElementById('bg');

if(results[0].label=="dog"){

    img.src='https://typeset-beta.imgix.net/lovelace/uploads/186/bd673b20-59a5-0133-9e4e-0af7184f89fb.gif';
    img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
    img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
    img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
    img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
    img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
    img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
    img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
    img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
    img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';
} else if(results[0].label=="lion"){

    img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
    img1.src='https://media.giphy.com/media/OqFpgF7bet1sRoCmpb/giphy.gif';
    img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
    img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
    img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
    img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
    img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
    img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
    img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
    img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';

}else if(results[0].label=="tiger"){

    img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
    img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
    img2.src='https://i.pinimg.com/originals/4f/b8/f9/4fb8f9f058407cb4b979ad655962a63b.gif';
    img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
    img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
    img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
    img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
    img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
    img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
    img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';}
    else if(results[0].label=="birds"){

        img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
        img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
        img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
        img3.src='http://media.giphy.com/media/IVuyqS6yFBUXK/giphy.gif';
        img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
        img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
        img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
        img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
        img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
        img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';}
        else if(results[0].label=="sheep"){

            img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
            img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
            img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
            img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
            img4.src='https://media.giphy.com/media/kAaItzrRXpAVq/giphy.gif';
            img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
            img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
            img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
            img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
            img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';}
            else if(results[0].label=="elephant"){

                img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
                img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
                img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
                img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
                img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
                img5.src='https://media3.giphy.com/media/ihkE9BqRyaImvh5k3d/giphy.gif';
                img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
                img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
                img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
                img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';}
                else if(results[0].label=="horse"){

                    img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
                    img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
                    img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
                    img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
                    img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
                    img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
                    img6.src='https://bestanimations.com/Animals/Mammals/Horses/animated-horse-gif-14.gif';
                    img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
                    img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
                    img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';}
                    else if(results[0].label=="donkey"){

                        img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
                        img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
                        img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
                        img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
                        img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
                        img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
                        img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
                        img7.src='https://media.tenor.co/images/b35cabcce1507ce9ef32ac430cd3a9b2/raw';
                        img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
                        img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';}
                        else if(results[0].label=="cat"){

                            img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
                            img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
                            img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
                            img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
                            img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
                            img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
                            img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
                            img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
                            img8.src='https://thumbs.gfycat.com/PortlyInsistentBobcat-small.gif';
                            img9.src='https://www.listchallenges.com/f/lists/9e6b9c12-378b-4e2f-bddd-02433c9bed98.jpg';
 }else{

    img.src='https://tse1.mm.bing.net/th?id=OIP.sk4xzEzVQDQl-3S_IQsOLgHaFs&pid=Api&P=0&w=213&h=164';
    img1.src='https://tse3.mm.bing.net/th?id=OIP.anCp17WaUpOz8YtqcV86iAHaEo&pid=Api&P=0&w=268&h=167';
    img2.src='https://tse3.mm.bing.net/th?id=OIP.P1BFEnZi7gLOCKJC2kcVsAHaEK&pid=Api&P=0&w=289&h=162';
    img3.src='https://tse4.mm.bing.net/th?id=OIP.ROAxZWn7ny3a5fAbZ1CTVwHaEo&pid=Api&P=0&w=291&h=182';
    img4.src='http://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Sheep-.jpg';
    img5.src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-1920x1200-animal-wallpaper.jpg';
    img6.src='https://tse3.mm.bing.net/th?id=OIP.MjUTOE2kWInpyqJ5EiP66AHaEK&pid=Api&P=0&w=337&h=189';
    img7.src='https://2.bp.blogspot.com/-zi_4p5hiwOg/TxrHfhHA9NI/AAAAAAAAEpI/2SW9Lzbx5bc/s1600/Donkey-01.jpg';
    img8.src='https://wallup.net/wp-content/uploads/2016/03/12/334095-kittens-animals-baby_animals-depth_of_field-wood.jpg';
    img9.src='https://download-free-images.com/00002/cute-gif-for-you-white-little-bird-176256.gif';
 }
}
 }