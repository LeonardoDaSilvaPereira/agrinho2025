//Jogo estilo subway surfer de trator
//sem chatgpt :)
let playerX
let altura = 800
let distancia = 0
let lado = 1    // 1 ou 2 ou 3
let pedrasY = []
let pedrasFila = []
let framedapedra = 0
let distDelta = 6 * (altura / 600)
function setup() {
  createCanvas(420, altura);
  playerX = width/2
  //addPedra(random([0,1,2]),-distancia)
  background(196)
  textAlign(CENTER,CENTER)
  textSize(48)
  text("clique aqui",210,400)
}



function draw() {  
  if (focused==true) { distancia += distDelta
  console.log(distancia)
  background(130, 90, 48);
  drawPista()
  drawplayer()
  pedraRandom()
  
  drawPedras()
  //console.log(pedrasFila,pedrasY)
  //console.log(playerX,lado)
                     }
}


function keyPressed() {
  if (keyCode === 37 || keyCode === 65 && playerX>50) {
    playerX -= width/3;
    lado-=1;
    if (playerX<width/3/2) {
      playerX=width/3/2
      lado=1
    }
  }
  if (keyCode === 39 || keyCode === 68 && playerX<250) {
    playerX += width/3;
    lado+=1;
    if (playerX>width-width/3/2) {
      playerX=width-width/3/2
      lado=3
    }
  }
  if (keyCode === 83) {
    addPedra(lado,-distancia)
  }
  if (keyCode === 87) {
    distancia += 5
  }
}

function drawplayer() {
  let faixa = width / 3
  let proporcao = faixa / 100

  let baseAltura = height
  let posX = playerX
  let largPneu = 6 * proporcao
  let altPneu = 15 * proporcao
  let largRoda = 7 * proporcao
  let altRoda = 25 * proporcao

  // pneus
  fill(0)
  rect(posX - 22 * proporcao, baseAltura - 95 * proporcao, largPneu, altPneu)
  rect(posX + 16 * proporcao, baseAltura - 95 * proporcao, largPneu, altPneu)
  rect(posX - 25 * proporcao, baseAltura - 55 * proporcao, largRoda, altRoda)
  rect(posX + 18 * proporcao, baseAltura - 55 * proporcao, largRoda, altRoda)

  // corpo do trator
  fill("#347A3E")
  strokeWeight(0)
  rect(posX - 20 * proporcao, baseAltura - 100 * proporcao, 40 * proporcao, 75 * proporcao)

  // teto
  fill("#23532A")
  rect(posX - 20 * proporcao, baseAltura - 75 * proporcao, 40 * proporcao, 35 * proporcao)
  
}


function addPedra(fila, yInicial) {
  pedrasFila.push(fila)
  pedrasY.push(yInicial)
}

function drawPedras() {
  for (let i = pedrasFila.length - 1; i >= 0; i--) {
    let yReal = pedrasY[i] + distancia
    if (yReal-60 > altura) {
      pedrasFila.splice(i, 1)
      pedrasY.splice(i, 1)
    } else {
      drawPedra(pedrasFila[i], pedrasY[i])
      //console.log(yReal,yReal-altura,yReal-182-altura,yReal-25-altura,distDelta)
      
      
      
      
      if ( (yReal-182-altura+360 < distDelta)) {
        if ( (yReal-182-altura+360) > 1) {
        if (pedrasFila[i] == lado) {
          textAlign(CENTER,CENTER)
          textSize(48)
          fill(255,0,0)
          textStyle(BOLDITALIC)
          textAscent()
          stroke(96,0,0)
          strokeWeight(10)
          text("perdeu playboy",210,altura/2)
          textAlign(CENTER,CENTER)
          textSize(24)
          fill(255)
          textStyle(NORMAL)
          textAscent()
          stroke(96)
          strokeWeight(5)
          let score = "distância: " + distancia
          text(score,210,altura/2+40)
          noLoop()
        }
        }
      }
    }
  }
}

function drawPista() {
  let faixaLargura = width / 3

  strokeWeight(0)
  fill(163, 118, 69)
  rect(faixaLargura, 0, faixaLargura, height)

  strokeWeight(2)
  line(faixaLargura, 0, faixaLargura, height)
  line(2 * faixaLargura, 0, 2 * faixaLargura, height)
}

function drawPedra(X, Y) {
  fill(96)
  let faixa = width / 3
  let centroX = X * faixa + faixa / 2
  let proporcao = faixa / 100

  strokeWeight(2)
  ellipse(centroX - 25 * proporcao, Y + 20 * proporcao + distancia, 25 * proporcao, 20 * proporcao)
  ellipse(centroX - 20 * proporcao, Y - 20 * proporcao + distancia, 15 * proporcao, 17 * proporcao)
  ellipse(centroX + 25 * proporcao, Y - 30 * proporcao + distancia, 20 * proporcao, 30 * proporcao)
  ellipse(centroX + 30 * proporcao, Y + 20 * proporcao + distancia, 20 * proporcao, 24 * proporcao)
  ellipse(centroX + 4 * proporcao, Y + 2 * proporcao + distancia, 18 * proporcao, 17 * proporcao)



}

function pedraRandom() {
  if (framedapedra <= frameCount) {
    addPedra(random([0,1,2]),-distancia)
    if (distancia<30000) {
      framedapedra = frameCount+60-distancia/1000
    } else 
    {
      framedapedra = frameCount+30
    }
  }
}

function mouseClicked() {
  console.log(mouseX+","+mouseY)
}