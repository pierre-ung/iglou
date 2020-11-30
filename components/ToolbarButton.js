import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ToolbarButton extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            height: this.props.height,
            width: this.props.width,
            bgColor: this.props.bgColor,
            onPress: this.props.onPress,
            icon: this.props.icon
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1,
                    backgroundColor: 'lighgray',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10 }}
                onPress={this.state.onPress}>
                <Image  source={{uri: this.state.icon,}}
                        resizeMethod='scale'/>
            </TouchableOpacity>
        );
    }
}