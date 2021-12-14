import React from 'react';
import "antd/dist/antd.css"
import "./App.css";
import { Form, Input, Button } from 'antd';

function form() {
    return(
        <div className="form">
            <Form>


                <Form.Item name="username"
                label="USERNAME"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input  className="input-name"></Input>
                </Form.Item>


                <Form.Item name="password"
                label="PASSWORD"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input type="password"
                           className="input-password">     
                    </Input>
                    {/* <span className="forgot-element">
                            Forgot? 
                     </span> */}
                </Form.Item>


                <Form.Item>
                    <Button 
                    className="input-button"
                    block type="primary" 
                    htmlType="submit" 
                    >SIGN IN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default form;