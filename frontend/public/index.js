// $('#github-button').on('click', function() {
// // Initialize with your OAuth.io app public key
// OAuth.initialize('YOUR_OAUTH_KEY');
// // Use popup for oauth
// // Alternative is redirect
// OAuth.popup('github').then(github => {
//     console.log('github:', github);
//     // Retrieves user data from oauth provider
//     // Prompts 'welcome' message with User's email on successful login
//     // #me() is a convenient method to retrieve user data without requiring you
//     // to know which OAuth provider url to call
//     github.me().then(data => {
//     console.log('me data:', data);
//     alert('GitHub says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
//     });
//     // Retrieves user data from OAuth provider by using #get() and
//     // OAuth provider url
//     github.get('/user').then(data => {
//     console.log('self data:', data);
//     })
// });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}