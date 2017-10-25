import {View} from '../view';
import {Motor} from '../../engines/motor';
import {Imagen} from '../imgs/imagen';
import {Button} from '../buttons/button';
import {EventsAdmin} from '../../events/eventsadmin';
import {DataHolder} from '../../dataholder/dataholder';



export class Window extends View {

    private sColor: string= null;
    public btnSalir: Button= null;
    private imgBack: Imagen= null;

    constructor(vmotor: Motor, vX: number, vY: number, vW: number, vH: number) {
        super(vmotor, vX, vY, vW, vH);
        this.btnSalir = new Button(this.motor, DataHolder.instance.nScreenWidth - 200, 0, 200, 100);
        this.motor.addViewToParentView(this, this.btnSalir);
        this.btnSalir.setImagePath('./assets/btn.png');
        this.btnSalir.setTexto('Salir');


    }

    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    paint(vctx: CanvasRenderingContext2D) {
        // console.log(this.xa+"========== "+this.ya);
    }


}
