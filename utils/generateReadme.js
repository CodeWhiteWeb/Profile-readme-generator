// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
<h3 align="center">

![](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header)


  <img src="https://camo.githubusercontent.com/5bbf8ca61ef5f92684489ace45ad6f45984fff87a621040c62b1fe31e3005ff9/687474703a2f2f692e696d6775722e636f6d2f436a34724d72532e676966" width="30">
  Welcome to Code White's profile!
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28">
</h3>
<p align="center">
  <a href="https://github.com/${answers.username}/${answers.username}"><img src="https://readme-typing-svg.herokuapp.com?color=%2336BCF7&center=true&vCenter=true&lines=Hi+%2C+welcome+to+my+Github+page;I+am+${answers.username};"></a>
</p>

---
<div align="center">
  
# ?? About Me :

?? I’m currently working on : ${answers.work}
  
?? I’m currently learning : ${answers.learn}

?? How to reach me:  
  Mail me at "${answers.email}"

? Fun fact: 7 out of 10 consumers find a company via the blog


<h3>Connect with me:</h3>
<p>
<a href="https://codepen.io/${answers.codepen}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="${answers.codepen}" height="30" width="40" /></a>
<a href="https://twitter.com/${answers.twitter}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${answers.twitter}" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/${answers.sof}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="${answers.sof}" height="30" width="40" /></a>
<a href="https://instagram.com/${answers.insta}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="${answers.insta}" height="30" width="40" /></a>
</p>
<a href="https://${answers.website}"><img src="https://img.shields.io/website?down_color=red&down_message=Under%20work&label=Portfolio&logo=github&style=for-the-badge&up_color=blue&up_message=Working&url=https%3A%2F%2F${answers.website}"></a>

# ??GitHub Stats :

![](https://github-readme-stats.vercel.app/api?username=${answers.username}&theme=dracula&show_icons=true&hide_border=true&count_private=true&include_all_commits=true)
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${answers.username}&theme=dracula&hide_border=true)](https://github.com/${answers.username}?tab=repositories)

## ??GitHub Trophies

[![](https://github-profile-trophy.vercel.app/?username=${answers.username}&theme=dracula&no-frame=false&no-bg=false&margin-w=4&row=2&column=3)](https://github-profile-trophy.vercel.app/?username=${answers.username}&theme=dracula&no-frame=false&no-bg=false&margin-w=4&row=2&column=4)
---
  
### ??Random Dev Quote

![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dracula)


### ??Riddles

[![Readme Riddle](https://github-readme-riddle.vercel.app/api?type=horizontal&theme=dracula)](https://github.com/CodeWhiteWeb/github-readme-riddle)

---
![](https://forthebadge.com/images/badges/powered-by-black-magic.svg)
![](http://ForTheBadge.com/images/badges/built-by-developers.svg)
![](https://forthebadge.com/images/badges/uses-brains.svg)
---
![Profile_Views](https://komarev.com/ghpvc/?username=${answers.username}&style=for-the-badge&label=Visitors+Count&color=brightgreen)


![](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer)

This README was generated with ?? by [profile-readme-generator](https://github.com/CodeWhiteWeb/profile-readme-generator/)
</div>
    `;
}

module.exports = generateReadme;