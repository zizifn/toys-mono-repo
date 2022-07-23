import { Router } from 'express';
import { openTelCounterHTTP } from '../utils/opnetel-metric'
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.rawHeaders);
  if (res.statusCode === 200) {
    const attributes = { api: 'index' };
    openTelCounterHTTP.add(1, attributes);
  }
  res.render('index', { title: 'Express' });
});

router.get('/http103', function (req, res, next) {
  // console.log(req.rawHeaders);

  // res.write
  // Assuming `res` is an instance of http.ServerResponse
  // res.socket.end(`HTTP/1.1 103 Early Hints\r\nLink: </static/test.js>; rel="prefetch"\r\n\r\n`);

  // res.socket.write('HTTP/1.1 103 Early Hints' +  '\r\n');
  // // res.socket.write('Link: </static/test.js>; rel="preload"; as=script\r\n');
  // res.socket.write('Link: <style.css>; rel="preload"; as="style"\r\n');

  (res as any)._writeRaw(`HTTP/1.1 103 Early Hints\r\nLink: </static/style.css>; rel="preload"; as=style\r\n\r\n`, 'ascii', (err, result) => {
    // yup
  });
  // res.setHeader('Link', `</static/style.css>; rel="preload"; as=style`)
  // res.render('http103', { title: 'Express', layout: false });

  // res.writeHead(200, {
  //   // Link: `</static/test.js>; rel="preload"; as=script`
  // });

   setTimeout(
    ()=>{
      res.setHeader('Link', `</static/test.js>; rel="preload"; as=script`)
      res.render('http103', { title: 'Express', layout: false });
}, 1000)

  // res.socket.write('HTTP/1.1 200 ok' +  '\r\n');
  // res.socket.write('Link: </static/test.js>; rel="prefetch"; as=script\r\n');
  // res.socket.write('test: 123\r\n');
  // res.socket.write('\r\n');
  // // res.socket.write('7777');

  // setTimeout(
  //   ()=>{
  //     res.socket.write('HTTP/1.1 200 OK' +  '\r\n');
  //     // res.socket.write('Link: </static/test.js>; rel="prefetch"; as=script\r\n');
  //     res.socket.write('Content-type: text/html\r\n');
  //     // res.socket.write('Link: <style.css>; rel="preload"; as="style"\r\n');
  //     res.socket.write('\r\n');
  //     res.socket.write('<h1>Hello, World!</h1>');
  //     // res.socket.write('<script src="/static/test.js"></script>');

  //     res.socket.write('666666');

  //     res.socket.end();
  //   },1000

});

export default router;
