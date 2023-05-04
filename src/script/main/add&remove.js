// adicionar categoria
$('#add-category-form').submit(function (event) {
    event.preventDefault();
    var categoryName = $('#category-name').val();
    $('#category-list').append('<li class="text-gray-600">' + categoryName + '</li>');
    $('#category-name').val('');
});

//limpar hábitos
$('#AC-btn').on("click", function (event) {
    event.preventDefault();
    for(let r=0;r<parseInt(localStorage.getItem("lenght"));r++){
        $('.habit-body').empty();
    }

    allclearHForm();
    listHabits = [];
    localStorage.clear();
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
        <td class="border px-4 py-2">${type2Elm(habType)}</td>
        <td class="border px-4 py-2">${imp2PTS(habPt, habType)}</td>
        <td class="border px-4 py-2">${habDesc}</td>
    </tr>
    `
    $('.habit-body').append(appendHTMLNow);
    listHabits.push(appendHTMLNow);

    i = localStorage.getItem("lenght");
    i++;
    localStorage.setItem(`row${i}`, appendHTMLNow);
    localStorage.setItem("lenght", i);

    allclearHForm();
});

function allclearHForm() {
    $('#habit-name').val('');
    $('#habit-category').val('');
    $('#habit-type').val('');
    $('#habit-points').val('');
    $('#habit-description').val('');
}
