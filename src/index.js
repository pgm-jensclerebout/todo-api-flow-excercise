/**
 * Main application
 */
import Express from 'express';


const app = new Express();

app.use(Express.json());

app.listen(6002, () => {
  console.log('server is running');
})

export default app;