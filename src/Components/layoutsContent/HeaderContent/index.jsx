// Style
import { HeartFilled, UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import {Row, Col, Menu} from 'antd';
import logo from '../../../assets/images/Logo_Canni.webp';
import "./style.css";

// App
function HeaderContent () {
  return (
      <div class="header">
        <div class="info-header background-grey white-color">
          <p><HeartFilled />ENVÍO GRATIS en pedidos sobre $ 50.000 | correo: contacto@canni.cl</p>
        </div>
        <div class="menu">
          <Row>
            <Col span={12}>
            <img src={logo} class="logo"/>
            </Col>
            <Col span={12} class="menu_principal">
              <Menu 
              style={{float: 'right'}}
              mode="horizontal"
              items={[
                { label:"", key:"Account", icon:<UserOutlined />},
                { label:"", key:"cart", icon:<ShoppingCartOutlined />},
                { label:"", key:"category", icon:<MenuOutlined />,
                children:[ 
                  {label: "Esmaltes", key: "esmaltes"},
                  {label: "Painting gel", key: "painting gel"},
                  {label: "Herramientas y accesorios", key: "herramientas y accesorios"},
                  {label: "Nail Extension", key: "nail Extension"},
                  {label: "Aceite y suavizante", key: "aceite y suavizante"},
                  {label: "Efectos y colecciones", key: "efectos y colecciones"},
                ]}
                ,
              ]}
              ></Menu>
            </Col>
          </Row>
        </div>
        <div class="bajada-header">
            <p>🚚 Hacemos entregas y 🎁 retiro en local </p>
        </div>
      </div>
)
};

export default HeaderContent;


