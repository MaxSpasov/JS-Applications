const form = document.querySelector('#form');
const notification = document.querySelector('.notification');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const facultyNumber = form.elements.facultyNumber.value;
  const grade = form.elements.grade.value;

  try {
    const response = await createStudent(firstName, lastName, facultyNumber, grade);
    console.log(response);
    notification.textContent = `Student ${response.firstName} ${response.lastName} added successfully!`;
    notification.classList.remove('error');
    notification.classList.add('success');
    form.reset();
  } catch (error) {
    console.error(error);
    notification.textContent = 'Error adding student';
    notification.classList.remove('success');
    notification.classList.add('error');
  }
});