document.getElementById("get-activity").addEventListener('click',function(){
    fetch ('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then (data => {
    console.log(data)
    document.getElementById("activity").textContent = data.activity
    document.body.classList.add("fun")
})

})