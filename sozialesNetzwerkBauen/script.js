let names = [];
let posts = [];

function addPost() {
    let text = document.getElementById("message").value;
    let name = document.getElementById('name').value;
    names.push(name)
    posts.push(text);

    document.getElementById("myposts");
    mypost.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        mypost.innerHTML += `
    <div class="post">
      <b>${names[i]}</b><br>
      ${posts[i]}
    </div>
    `;
    }

    document.getElementById("message").value = '';

}
