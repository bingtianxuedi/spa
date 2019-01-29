import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Top from './header.js';
import Contents from './content.js';
import Bottom from './footer.js';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Icon} from 'antd';

class ContainerIndex extends Component{
    render() {
        const padding = {
            padding:0,
            textAlign:'center'
        }
        return(
            <Container>
                <Row>
                    <Col xs={2} md={2} style={padding}>
                        <div style={{lineHeight:"50px",fontSize:'20px',height:'50px'}}>
                            Logo Icon
                        </div>
                        <ButtonGroup vertical>
                            <Button style={{background:"gray",border:'none'}}>
                                <span><Icon type='home' /> </span>
                                <span>  首页</span>
                            </Button>
                            <Button>音乐模块</Button>
                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                            <Button>工具模块</Button>
                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                            <Button>待办事项</Button>
                            <Button>画廊模块</Button>
                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                            <Button>开发模块</Button>
                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                            </DropdownButton>
                            <Button>项目地址</Button>
                        </ButtonGroup>;

                    </Col>
                    <Col xs={10} md={10} style={padding}>
                        <Top/>
                        <Contents/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'center'}}>
                        <Bottom/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ContainerIndex;