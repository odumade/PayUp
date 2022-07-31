import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    SafeAreaView
} from 'react-native';
import {
    IconButton,
    TextButton
} from '../components';
import {
    COLORS,
    SIZES,
    FONTS,
    icons,
    constants
} from '../constants';

const Scan = ({ navigation }) => {

    const [selectedOption, setSelectedOption] = useState(constants.scan_product_option.camera)

    // Render
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: SIZES.padding * 5,
                    paddingBottom: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center',
                    backgroundColor: COLORS.light,
                    zIndex: 1
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.close}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            //tintColor: COLORS.secondary
                        }}
                    />
                </TouchableOpacity>


                {/* <IconButton icon={icons.close} onPress={() => navigation.goBack()}
                    style={{
                        paddingTop: 50
                    }}
                /> */}

                {/* Title */}
                <Text
                    style={{
                        flex: 1,
                        marginLeft: SIZES.base,
                        ...FONTS.h2
                    }}
                >
                    {selectedOption == constants.scan_product_option.camera ? "Scan Camera" : "Scan QR Code"}
                </Text>

                {/* Add Option */}
                <TouchableOpacity
                    onPress={() => console.log("flash")}
                >
                    <Image
                        source={icons.flash}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,

                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Header */}
            {renderHeader()}
        </View>
    )
}

export default Scan;

