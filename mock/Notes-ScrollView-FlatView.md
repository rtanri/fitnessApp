### Lesson 2-3

### ScrollView and FlatList --------- -------- ---------

Compare to Scrollview, Flatlist improve the performance faster & lighter
by rendering only a specific items that users can see, still scrollable.

### next video --------- Switch that hide images, forms and Keyboard -------- ---------

handleToggleSwitch = () => {
    this.setState((state) => ({
        showInput: !state.showInput,
    }))
}

render(){
    state = {
        input: '@revintanri'
        showInput:false,
    }

    <Switch
        value={showInput}
        onValueChange={this.handleToggleSwitch}
    />
    <keyboardAvoidingView behaviour='padding' style={styles.container}>
}

### next video --------- Load 2 images: local & server -------- ---------

<Image style={styles.img} source={require('./tylermcginnis.png)} /> 
<View style={{margin:50}}/>
<image style={styles.img} source={{uri: 'www.revintanri.com'}} /> 