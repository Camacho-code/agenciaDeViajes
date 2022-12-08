import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje
} from "../controllers/paginasController.js";
import { guardarTestimonio } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/viajes/:viaje", paginaDetalleViaje);//Usa un comodin en la ruta
router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonio);


export default router;
