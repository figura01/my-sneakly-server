import { Router } from 'express';
// import uploadCloud from '../../config/middleware/cloudinary';
import { UserComponent } from '../../components';
import { CategorieProductComponent } from '../../components';
import { ProductComponent } from '../../components';
/**
 * @constant {express.Router}
 */
const router: Router = Router();
router.get('/users', UserComponent.findAll);
router.post('/users', UserComponent.create);
router.get('/users/:id', UserComponent.findOne);
router.delete('/users/:id', UserComponent.remove);
router.patch('/users/:id', UserComponent.updateOne);

router.get('/categorie-products', CategorieProductComponent.findAll);
router.post('/categorie-products', CategorieProductComponent.create);
router.get('/categorie-products/:id', CategorieProductComponent.findOne);
router.delete('/categorie-products/:id', CategorieProductComponent.remove);
router.patch('/categorie-products/:id', CategorieProductComponent.updateOne);
/** Routes Products */
router.get('/products', ProductComponent.findAll);
router.post('/products', ProductComponent.create);
router.get('/products/:id', ProductComponent.findOne);
router.delete('/products/:id', ProductComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
