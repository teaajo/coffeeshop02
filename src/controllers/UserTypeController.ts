import { NextFunction, Request, Response, Router } from "express";
import { UserTypeService } from "../services/UserTypeService";


const router = Router();

router.get('/',  (req: Request, res: Response, next: NextFunction) => {
    UserTypeService
      .getUserTypes()
      .then((cars) => {
        res.send(cars);
      })
      .catch(next);
  });

router.get('/:id',  (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  try {
    UserTypeService
      .getById(id)
      .then((cars) => {
        if(!cars)
        {
          return res.status(404).json({ error: 'Not found' });
        }
        res.send(cars);
      })
  }
  catch 
  {
    return res.status(500).json({ error: 'Server error' });
  }
  });
  
  
export default router;