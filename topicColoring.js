function newMessage(topicName) {
    // Write your code here
    let data = document.querySelector("p[data-name=" + topicName + "]");
    data.style.backgroundColor = "red"
}

// Example case
document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;
newMessage("discussion");
console.log(document.body.innerHTML);