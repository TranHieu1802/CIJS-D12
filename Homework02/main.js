const app = document.getElementById('app');
const solution__1 = new Faq(' Đời nhà Trần có một danh sĩ được gọi là “Lưỡng quốc Trạng Nguyên” (Trạng Nguyên hai nước), đó là ai?', 'Mạc Đĩnh Chi');
const solution__2 = new Faq('Thành phố Hà Nội có tên gọi đầu tiên trong lịch sử là Tống Bình. Tên gọi này xuất hiện từ thế kỉ thứ mấy? ?', 'Thứ V');
const solution__3 = new Faq('Loại vũ khí đánh xe tang của chiến sĩ quyết tử thủ đô trong những ngày đầu kháng chiến chống Pháp?', 'Bom ba càng.')


const title = document.createElement('h3');
title.innerHTML = 'FAQ?'

app.appendChild(title);
app.appendChild(solution__1.render());
app.appendChild(solution__2.render());
app.appendChild(solution__3.render());