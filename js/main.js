(function() {
  // All code NOT referencing DOM elements can go here

  var GitHubUserXHR = new XMLHttpRequest();
  var GitHubRepoXHR = new XMLHttpRequest();

  var githubUserElement = document.querySelector("[data-js='GitHubUser-name']");
  var githubBlogElement = document.querySelector("[data-js='GitHubUser-blog']");
  var githubLocationElement = document.querySelector("[data-js='GitHubUser-location']");
  var githubEmailElement = document.querySelector("[data-js='GitHubUser-email']");
  var githubAvatarElement = document.querySelector("[data-js='GitHubUser-avatar']");
  var githubURLElement = document.querySelector("[data-js='GitHubUser-url']");

  var githubRepoElement = document.querySelector("[data-js='GitHub-repo']");
  document.addEventListener("DOMContentLoaded", function(e){
    // ALL DOM RELATED QUERYING GOES HERE

    GitHubUserXHR.addEventListener("load", function(e){
      var GitHubUserData = JSON.parse(e.target.responseText);
      githubUserElement.innerHTML = GitHubUserData.name;
      githubBlogElement.innerHTML = GitHubUserData.blog;
      githubLocationElement.innerHTML = GitHubUserData.location;
      githubEmailElement.innerHTML = GitHubUserData.email;
      githubAvatarElement.innerHTML =  "<img src='"  +  GitHubUserData.avatar_url + "' />";
      githubURLElement.innerHTML = "<a href='" + GitHubUserData.url +  "'>" + GitHubUserData.url + "</a>";
    });
    GitHubRepoXHR.addEventListener("load", function(e){
      var reponame = JSON.parse(e.target.responseText);
      reponame.forEach(function(repo){
      githubRepoElement.innerHTML += "<a class='GitHub-repo__item' href='" + repo.html_url + "'>" + repo.name + "</a>";
      })
    });



  });

  GitHubUserXHR.open("GET", "https://api.github.com/users/ernestodls");
  GitHubUserXHR.send();

  GitHubRepoXHR.open("GET", "https://api.github.com/users/ernestodls/repos");
  GitHubRepoXHR.send();

}());
