import React from 'react';
import { Layout, Menu } from 'antd';
import { FolderOutlined, FileOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';  // Importa los estilos de Ant Design
import './App.css';  
import Empleado_view from './views/Empleado_view';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
  
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
      
        <Sider width={200} style={{ background: '#001529' }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Inicio
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Usuario
            </Menu.Item>
            <SubMenu key="sub1" icon={<FolderOutlined />} title="Carpeta">
              <Menu.Item key="3" icon={<FileOutlined />}>
                Archivo 1
              </Menu.Item>
              <Menu.Item key="4" icon={<FileOutlined />}>
                Archivo 2
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ margin: '16px 0', padding: 24, background: '#fff', minHeight: 280 }}>
            <h1>Contenido Principal</h1>
            <p>Este es el contenido de la página principal. Aquí puedes mostrar lo que necesites.</p>
          </Content>
        </Layout>
      </Layout>

    </div>

    
  );
};

export default App;
