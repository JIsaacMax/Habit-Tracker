// adicionar categoria
$('#add-category-form').submit(function (event) {
    event.preventDefault();
    var categoryName = $('#category-name').val();
    $('#category-list').append('<li class="text-gray-600">' + categoryName + '</li>');
    $('#category-name').val('');
});

// adicionar hábito
$('#add-habit-form').submit(function (event) {
    event.preventDefault();
    var habName = $('#habit-name').val();
    var habCat = $('#habit-category').val();
    var habType = $('#habit-type').val();
    var habPt = $('#habit-points').val();
    var habDesc = $('#habit-description').val();
    let appendHTMLNow = 
    `
    <tr>
        <td class="border px-4 py-2">${habName}</td>
        <td class="border px-4 py-2">${habCat}</td>
        <td class="border px-4 py-2">${habType}</td>
        <td class="border px-4 py-2">${habPt}</td>
        <td class="border px-4 py-2">${habDesc}</td>
    </tr>
    `
    $('.habit-body').append(appendHTMLNow);
    listHabits.push(appendHTMLNow);

    localStorage.setItem(`${typeof(appendHTMLNow)}${i}`, appendHTMLNow);
    i++;
    localStorage.setItem("lenght", i);

    $('#habit-name').val('');
    $('#habit-category').val('');
    $('#habit-type').val('');
    $('#habit-points').val('');
    $('#habit-description').val('');
});