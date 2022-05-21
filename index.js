const express = require("express");
const Client = require("uptime-robot");
const Canvas = require("canvas");

const app = express();

app.use(express.static("public"));
const listener = app.listen(process.env.PORT, function() {
  console.log("✔️  Your app is listening on port: " + listener.address().port);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//JOIN LEAVE

app.get("/", function(req, res) {
  if(!req.query.accesstoken || 
     !req.query.event || !req.query.event === "join" || !req.query.event === "leave" || !req.query.event === "level" || 
     !req.query.background || 
     !req.query.textcolor || !req.query.textcolor === "white" || !req.query.textcolor === "black" || !req.query.textcolor === "red" || !req.query.textcolor === "orange" || !req.query.textcolor === "yellow" || !req.query.textcolor === "green" || !req.query.textcolor === "blue" || !req.query.textcolor === "lightblue" || !req.query.textcolor === "indigo" || !req.query.textcolor === "violet" || !req.query.textcolor === "darkgreen" || !req.query.textcolor === "darkred" || 
     !req.query.text || 
     !req.query.username || 
     !req.query.discriminator || 
     !req.query.subtext || 
     !req.query.avatar || req.query.avatar.includes(".webp")
     ) {
    return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/?accesstoken=<access_token>&event=<join/leave/level>&background=<1-23>&textcolor=<white/red/orange/yellow/green/blue/lightblue/indigo/violet/darkgreen/darkred>&text=<custom text (e.g. Welcome!, Bye! or Level Up!)>&username=<username>&discriminator=<discriminator (without #)>&subtext=<custom text (e.g. 138th or 14th)>&avatar=<avatar_url.png>`});
    
  } else {
    
    if(req.query.accesstoken === process.env.ADMIN_TOKEN || 
       req.query.accesstoken === process.env.FRIEND_TOKEN
      ) {

        try {
          const { registerFont } = require("canvas");
          registerFont("fonts/sansserif.otf", { family: "sans-serif" });

          let textcolor;
          if(req.query.textcolor === "white") textcolor = "#ffffff";
          if(req.query.textcolor === "black") textcolor = "#000000";
          if(req.query.textcolor === "red") textcolor = "#ff0000";
          if(req.query.textcolor === "orange") textcolor = "#ffb900";
          if(req.query.textcolor === "yellow") textcolor = "#ffff00";
          if(req.query.textcolor === "green") textcolor = "#00ff00";
          if(req.query.textcolor === "blue") textcolor = "#0000ff";
          if(req.query.textcolor === "lightblue") textcolor = "#00ffd5";
          if(req.query.textcolor === "indigo") textcolor = "#2e2b5f";
          if(req.query.textcolor === "violet") textcolor = "#8b00ff";
          if(req.query.textcolor === "darkgreen") textcolor = "#43b481";
          if(req.query.textcolor === "darkred") textcolor = "#f04947";

          let backgroundimg;
          if(req.query.background === "1") backgroundimg = "images/background1.png";
          if(req.query.background === "2") backgroundimg = "images/background2.png";
          if(req.query.background === "3") backgroundimg = "images/background3.png";
          if(req.query.background === "4") backgroundimg = "images/background4.png";
          if(req.query.background === "5") backgroundimg = "images/background5.png";
          if(req.query.background === "6") backgroundimg = "images/background6.png";
          if(req.query.background === "7") backgroundimg = "images/background7.png";
          if(req.query.background === "8") backgroundimg = "images/background8.png";
          if(req.query.background === "9") backgroundimg = "images/background9.png";
          if(req.query.background === "10") backgroundimg = "images/background10.png";
          if(req.query.background === "11") backgroundimg = "images/background11.png";
          if(req.query.background === "12") backgroundimg = "images/background12.png";
          if(req.query.background === "13") backgroundimg = "images/background13.png";
          if(req.query.background === "14") backgroundimg = "images/background14.png";
          if(req.query.background === "15") backgroundimg = "images/background15.png";
          if(req.query.background === "16") backgroundimg = "images/background16.png";
          if(req.query.background === "17") backgroundimg = "images/background17.png";
          if(req.query.background === "18") backgroundimg = "images/background18.png";
          if(req.query.background === "19") backgroundimg = "images/background19.png";
          if(req.query.background === "20") backgroundimg = "images/background20.png";
          if(req.query.background === "21") backgroundimg = "images/background21.png";
          if(req.query.background === "22") backgroundimg = "images/background22.png";
          if(req.query.background === "23") backgroundimg = "images/background23.png";
          if(req.query.background === "anime") {
            let backgroundimgs = ["images/anime1.png", "images/anime2.png", "images/anime3.png", "images/anime4.png", "images/anime5.png", "images/anime6.png", "images/anime7.png", "images/anime8.png", "images/anime9.png", "images/anime10.png"];
            let random = Math.floor(Math.random() * backgroundimgs.length);
            backgroundimg = backgroundimgs[random];
          }
          if(req.query.background === "sdf") backgroundimg = "images/backsdf.png";
          if(req.query.background === "fw") backgroundimg = "images/footerwave.png";
      
          if(req.query.event === "join" || req.query.event === "leave" || req.query.event === "level") {

            console.log(req.query.avatar);

            const applyText = (canvas, text) => {
              const ctx = canvas.getContext("2d");

              let fontSize = 70;

              do {

                ctx.font = `${fontSize -= 10}px sans-serif`;

              } while (ctx.measureText(text).width > canvas.width - 300);

              return ctx.font;
            };

            const canvas = Canvas.createCanvas(700, 250);
            const ctx = canvas.getContext("2d");

            const background = Canvas.loadImage(backgroundimg).then(background => {
              ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
              ctx.strokeStyle = textcolor;
              ctx.strokeRect(0, 0, canvas.width, canvas.height);

              ctx.font = "32px sans-serif";
              ctx.fillStyle = textcolor;
              ctx.fillText(req.query.text, canvas.width / 2.5, canvas.height / 3.5);

              ctx.font = "38px sans-serif"
              ctx.fillStyle = textcolor;
              ctx.fillText(`${decodeURI(req.query.username)}#${req.query.discriminator}`, canvas.width / 2.5, canvas.height / 1.8);

              ctx.font = "24px sans-serif";
              ctx.fillStyle = textcolor;
              ctx.fillText(`#${req.query.subtext}`, canvas.width / 2.5, canvas.height / 1.5);

              ctx.beginPath();
              ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.clip();

              const avatar = Canvas.loadImage(req.query.avatar).then(avatar => {
                ctx.drawImage(avatar, 25, 25, 200, 200);

                res.contentType("image/jpeg");
                res.end(canvas.toBuffer(), `${req.query.event}.png`);
              }).catch(err => {
                return res.json({"error":`The submitted avatar_url was incorrect! https://tsunamiapi.tsunami2360.repl.co/?accesstoken=<access_token>&event=<join/leave/level>&background=<1-23>&textcolor=<white/red/orange/yellow/green/blue/lightblue/indigo/violet/darkgreen/darkred>&text=<custom text (e.g. Welcome!, Bye! or Level Up!)>&username=<username>&discriminator=<discriminator (without #)>&subtext=<custom text (e.g. 138th or 14th)>&avatar=<avatar_url.png>`});
              });
            });
          }
        } catch(err) {
          res.json({"error":"something went wrong!"});
        }
    } else {
      return res.send({"error":`Please buy an access token to be able to use this api.`});
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//COLOR

app.get("/color/", function(req, res) {
  if(!req.query.hex) {
    res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/color/?hex=<ffffff (without color prefixes # of 0x>`});
  } else {
    if(req.query.hex.length > 6) return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/color/?hex=<ffffff (without hexadecimal color prefixes # of 0x)>`});

    const canvas = Canvas.createCanvas(500, 500);
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = `#${req.query.hex}`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    res.contentType("image/jpeg");
    res.end(canvas.toBuffer(), `color.png`);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//ABANDON

app.get("/abandon/", function(req, res) {
  
  if(!req.query.accesstoken || 
     !req.query.text
     ) {
    return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/abandon/?accesstoken=<access_token>&text=<text>`});
    
  } else {
    
    if(req.query.accesstoken === process.env.ADMIN_TOKEN || 
       req.query.accesstoken === process.env.FRIEND_TOKEN
    ) {

      const { registerFont } = require("canvas");
      registerFont("fonts/sansserif.otf", { family: "sans-serif" });

      const applyText = (canvas, text) => {
        const ctx = canvas.getContext("2d");

        let fontSize = 70;

        do {

          ctx.font = `${fontSize -= 10}px sans-serif`;

        } while (ctx.measureText(text).width > canvas.width - 300);

        return ctx.font;
      };

      const canvas = Canvas.createCanvas(764, 768);
      const ctx = canvas.getContext("2d");

      const background = Canvas.loadImage("images/abandon.png").then(background => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.font = "28px sans-serif";
        ctx.fillStyle = "#000000";
        ctx.fillText(req.query.text, 30, 440);

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        res.contentType("image/jpeg");
        res.end(canvas.toBuffer(), `abandon.png`);
      });
    } else {
      return res.json({"error":`Please buy an access token to be able to use this api.`});
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//EXCUSEME

app.get("/excuseme/", function(req, res) {
  
  if(!req.query.accesstoken || 
     !req.query.text
     ) {
    return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/excuseme/?accesstoken=<access_token>&text=<text>`});
    
  } else {
    
    if(req.query.accesstoken === process.env.ADMIN_TOKEN || 
       req.query.accesstoken === process.env.FRIEND_TOKEN
    ) {

      const { registerFont } = require("canvas");
      registerFont("fonts/sansserif.otf", { family: "sans-serif" });

      const applyText = (canvas, text) => {
        const ctx = canvas.getContext("2d");

        let fontSize = 70;

        do {

          ctx.font = `${fontSize -= 10}px sans-serif`;

        } while (ctx.measureText(text).width > canvas.width - 300);

        return ctx.font;
      };

      const canvas = Canvas.createCanvas(764, 768);
      const ctx = canvas.getContext("2d");

      const background = Canvas.loadImage("images/excuseme.png").then(background => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.font = "34px sans-serif";
        ctx.fillStyle = "#000000";
        ctx.fillText(req.query.text, 20, 45);

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        res.contentType("image/jpeg");
        res.end(canvas.toBuffer(), `excuseme.png`);
      });
    } else {
      return res.json({"error":`Please buy an access token to be able to use this api.`});
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//DUCKBUTT

app.get("/duckbutt/", function(req, res) {
  if(!req.query.accesstoken || !req.query.avatar || req.query.avatar.includes(".webp")
     ) {
    return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/duckbutt/?accesstoken=<access_token>&avatar=<avatar_url.png>`});
    
  } else {
    
    if(req.query.accesstoken === process.env.ADMIN_TOKEN || 
       req.query.accesstoken === process.env.FRIEND_TOKEN
      ) {

      const canvas = Canvas.createCanvas(700, 700);
      const ctx = canvas.getContext("2d");

      const background = Canvas.loadImage("images/duckbutt.png").then(background => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(420, 180, 60, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = Canvas.loadImage(req.query.avatar).then(avatar => {
          ctx.drawImage(avatar, 360, 120, 120, 120);

          res.contentType("image/jpeg");
          res.end(canvas.toBuffer(), `duckbutt.png`);
        }).catch(err => {
          return res.json({"error":`The submitted avatar_url was incorrect! https://tsunamiapi.tsunami2360.repl.co/duckbutt/?accesstoken=<access_token>&avatar=<avatar_url.png>`});
        });
      });
    } else {
      return res.json({"error":`Please buy an access token to be able to use this api.`});
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//RIP

app.get("/rip/", function(req, res) {
  if(!req.query.accesstoken || !req.query.avatar || req.query.avatar.includes(".webp")
     ) {
    return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/rip/?accesstoken=<access_token>&avatar=<avatar_url.png>`});
    
  } else {
    
    if(req.query.accesstoken === process.env.ADMIN_TOKEN || 
       req.query.accesstoken === process.env.FRIEND_TOKEN
      ) {

      const canvas = Canvas.createCanvas(490, 319);
      const ctx = canvas.getContext("2d");

      const background = Canvas.loadImage("images/rip.png").then(background => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(180, 220, 200, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = Canvas.loadImage(req.query.avatar).then(avatar => {
          ctx.drawImage(avatar, 178, 136, 100, 100);

          res.contentType("image/jpeg");
          res.end(canvas.toBuffer(), `rip.png`);
        }).catch(err => {
          return res.json({"error":`The submitted avatar_url was incorrect! https://tsunamiapi.tsunami2360.repl.co/rip/?accesstoken=<access_token>&avatar=<avatar_url.png>`});
        });
      });
    } else {
      return res.json({"error":`Please buy an access token to be able to use this api.`});
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//WANTED

app.get("/wanted/", function(req, res) {
  if(!req.query.accesstoken || !req.query.avatar || req.query.avatar.includes(".webp")
     ) {
    return res.json({"error":`https://tsunamiapi.tsunami2360.repl.co/wanted/?accesstoken=<access_token>&avatar=<avatar_url.png>`});
    
  } else {
    
    if(req.query.accesstoken === process.env.ADMIN_TOKEN || 
       req.query.accesstoken === process.env.FRIEND_TOKEN
      ) {

      const canvas = Canvas.createCanvas(368, 480);
      const ctx = canvas.getContext("2d");

      const background = Canvas.loadImage("images/wanted.png").then(background => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(180, 220, 200, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = Canvas.loadImage(req.query.avatar).then(avatar => {
          ctx.drawImage(avatar, 68, 140, 230, 230);

          res.contentType("image/jpeg");
          res.end(canvas.toBuffer(), `wanted.png`);
        }).catch(err => {
          return res.json({"error":`The submitted avatar_url was incorrect! https://tsunamiapi.tsunami2360.repl.co/wanted/?accesstoken=<access_token>&avatar=<avatar_url.png>`});
        });
      });
    } else {
      return res.json({"error":`Please buy an access token to be able to use this api.`});
    }
  }
});
