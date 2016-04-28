export function sendAnswer(props){
	socket.emit('send', props)
	console.log('props', props)

}