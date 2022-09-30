import React from 'react';
const Yaml = require('yamljs')
const phraser = (props:any) => {
    const list = Yaml.parse(props.file);
    console.log(list)
}
export default phraser;