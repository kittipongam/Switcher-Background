# Switcher-Background
An Small Project for add Switcher for user design which one is interesting

> make source code for guideline to apply with web-site
> make background color and font color change

## Open with default

![image](https://user-images.githubusercontent.com/104770048/169212014-1c669a3a-7a2b-4560-b54e-ed784157ffda.png)


## Click on green
![image](https://user-images.githubusercontent.com/104770048/169212391-61e72e67-918e-4d82-bb84-c347656561df.png)

## Click on blue

![image](https://user-images.githubusercontent.com/104770048/169212422-40a3a40b-d48e-4c65-97a8-73d52630fc66.png)

### HTML


>

    <!DOCTYPE html>
    <html lang="en">
     <head>
      <meta charset="UTF-8">                      // set character 
      <meta name="viewport" content="width=device-width", initial-scale="1.0">  //for multi-platform
      <title> Test </title>

      <link rel="stylesheet" href="Style.css">    // link with css stylesheet
    </head>
     <body>
        <ul id = "switcher">
           <li id="blueButton"></li>              // adding ID for blue button
           <li id="greenButton"></li>             // adding ID for green button
        </ul>

        <h1>Color</h1>
        <p> try </p>
        <script src="Script.js"></script>         // link with script
     </body>

     <footer>

     </footer>

    </html>

>


### CSS

>

      body{
          margin: 3rem;
          padding:0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 20px;

      }
      p{
          font-size: 20px;
      }
      h1{
          line-height: 1.25;
          margin:2 em;
      }

      #switcher{
          list-style: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
      }
      #switcher li{
          float: left;
          width: 30px;
          height: 30px;
          margin: 0 15px 15px 0;
          border-radius: 30px;
          border: 3px solid black;

      }

      #blueButton{
          background-color: blue;
      }

      #greenButton{
          background-color: green;
      }

>




### JavaScript

>

    document.getElementById('greenButton').onclick = switchGreen;
    document.getElementById('blueButton').onclick = switchBlue;

    function switchGreen(){
        document.getElementsByTagName('body')[0].style.backgroundColor='green';
        document.getElementsByTagName('body')[0].style.color='white';
    }
    function switchBlue(){
        document.getElementsByTagName('body')[0].style.backgroundColor='blue';
        document.getElementsByTagName('body')[0].style.color='yellow';
    }

>


