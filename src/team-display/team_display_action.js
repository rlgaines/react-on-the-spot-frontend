export function sendAnswer(props){
	console.log(props)
 $.ajax({
      url: 'http://localhost:3000/users/1',
      dataType: 'json',
      type: 'POST',
      data: props
    });
}
