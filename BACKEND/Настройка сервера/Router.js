//# создается файл Router
import Router from 'express';
const router = new Router;

router.post('/posts'); // отправка поста
router.get('/posts'); // получение списка постов
router.get('/posts/:id'); // получение поста с id
router.put('/posts'); // обновление
router.delete('/posts/:id'); // удаление

export default router;

//# далее импортируется в index.js
import router from './Router';

