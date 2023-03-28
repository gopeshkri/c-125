function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}
 
function gotPoses (results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}
function create 