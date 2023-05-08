const footerContent = `
    <!-- At the bottom of the page, there is a footer which includes useful links and information -->
    <div class="content footer-content">
        <div><div class="foot-head">Useful links</div>
            <div class="link-list">
                <div class="valign"><img class="prefix" alt="processor" src="img/icon/material/processor.png"><a class="link grey" href="https://claaz-technologies.org">Claaz Technologies</a></div>
                <div class="valign"><img class="prefix" alt="trello roadmap" src="img/icon/material/trello.png"><a class="link grey" href="https://trello.com/b/Tzf6Bw97" target="_blank">Website Roadmap (Trello)</a></div>
                <div class="valign"><img class="prefix" alt="terms" src="img/icon/material/terms.png"><a class="link grey" href="policy">Terms and Policies</a></div>
            </div>
        </div>
        <div><div class="foot-head">Socials</div>
            <div class="link-list">
                <div class="valign"><img class="prefix" alt="twitter" src="img/icon/material/twitter.png"><a target="_blank" class="link grey" href="https://twitter.com/Claasgreeneye">Twitter</a></div>
                <div class="valign"><img class="prefix" alt="youtube" src="img/icon/material/youtube.png"><a target="_blank" class="link grey" href="https://youtube.com/@claasgreeneye">Youtube</a></div>
                <div class="valign"><img class="prefix" alt="discord" src="img/icon/material/discord.png"><a target="_blank" class="link grey" href="https://discord.gg/w2BySSGg2r">Discord Server (MDR)</a></div>
                <div class="valign"><img class="prefix" alt="email icon" src="img/icon/material/email.png"><a class="link grey" href="mailto:claasgreeneye@pm.me">Public Email</a></div>
            </div>
        </div>
        <div><div class="foot-head">More</div>
            <div class="link-list">
                 <div class="valign"><img class="prefix" alt="twitter" src="img/icon/material/male_user.png"><a class="link grey" href="about-me">About Me</a></div>
            </div>
        </div>
    </div>
    <div class="content">
        <span class="light small">Credit to <a class="link" href="https://icons8.com" target="_blank">Icons8</a> for the icons used in the website.</span>
    </div>
`;

window.onload = function() {
    const item = document.createElement('footer');
    item.innerHTML = footerContent;
    document.body.appendChild(item)
}