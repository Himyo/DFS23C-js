class Component {
    constructor(props) {    }

    bonjour = () => {
        console.log('bonjour')
    }
}


class Home extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        return {
            type: '',
            attributes: {},
            children: []
        }
    }
}


// const HomePrototype = {};