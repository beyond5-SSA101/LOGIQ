# LOGIQ – Website tư duy phản biện (Beyond 5)

Đây là **mẫu website một trang** được xây dựng dựa trên nội dung kế hoạch dự án LOGIQ – Tư duy phản biện, môn SSA101, nhóm Beyond 5. Bố cục lấy cảm hứng từ mô hình khóa học tương tác của WISEFO nhưng code, thiết kế, nội dung và các câu hỏi là bản mẫu được làm mới.

## Mở trên máy tính
1. Giải nén thư mục.
2. Nháy đúp tệp `index.html` để mở bằng Chrome/Edge. Không cần cài phần mềm hay máy chủ.
3. Hoặc mở thư mục bằng VS Code và dùng tiện ích Live Server để xem sau khi sửa.

## Thay nội dung
- **Tên nhóm / các phần mô tả:** tìm và sửa ngay trong nội dung HTML.
- **4 bài học / câu hỏi thực hành:** sửa mảng `const lessons = [...]` gần cuối file.
- **6 câu quiz:** sửa `const quizData = [...]`. Mỗi câu có `q` (câu hỏi), `a` (3 lựa chọn), `correct` (vị trí đáp án đúng bắt đầu từ 0).
- **Link khảo sát:** tạo Google Form, sao chép link, sau đó đặt vào `const FEEDBACK_FORM_URL = 'https://...';` ở đầu đoạn `<script>`.
- **Màu giao diện:** sửa các biến màu trong CSS `:root`.
- **Hình / video:** có thể thêm `<img>` hoặc `<iframe>` vào HTML khi có quyền sử dụng nội dung và nguồn phù hợp.
- **Trắc nghiệm:** phần bài học lưu tiến độ trên trình duyệt (localStorage); bài kiểm tra tổng kết tính điểm trực tiếp trên máy người dùng. Không gửi hoặc lưu thông tin cá nhân lên máy chủ.
- **Chứng nhận:** chỉ mang tính ghi nhận trải nghiệm trên website; không phải chứng chỉ chính thức. Đạt từ 5/6 câu, nhập tên, rồi chọn In / Lưu PDF.

## Đăng miễn phí bằng GitHub Pages (không cần gõ lệnh)
1. Đăng nhập https://github.com/ và chọn **New repository**.
2. Đặt tên `LOGIQ` (hoặc tên khác), chọn **Public**, nhấn **Create repository**.
3. Trong repository, chọn **Add file → Upload files**. Tải `index.html` và `README.md` lên **thư mục gốc** của repository rồi nhấn **Commit changes**.
4. Chọn **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
5. Chọn **Branch: main**, thư mục **/(root)**, rồi nhấn **Save**.
6. Sau khi GitHub triển khai xong, địa chỉ của bạn là `https://TEN-TAI-KHOAN.github.io/LOGIQ/` nếu repo tên LOGIQ (phân biệt chữ hoa/chữ thường).
7. Mở thử bằng cả máy tính và điện thoại. Kiểm tra nút học bài, quiz, link khảo sát và in chứng nhận.

## Những điểm nên kiểm tra trước khi nộp
- Bản kế hoạch mô tả bốn buổi, thời gian bảng chi tiết **45 + 45 + 50 + 50 phút**. Có chỗ ghi "mỗi bài 40 phút" nhưng bảng lịch chi tiết là 45/50 phút; mẫu website chọn số liệu của bảng chi tiết.
- Hai tỷ lệ khảo sát khoảng **65% / 75%** trên kế hoạch đang kèm ghi chú chờ chèn số liệu thực tế; mẫu website **không đưa hai tỷ lệ này** khi chưa xác nhận.
- Các hoạt động quiz trong mẫu được **biên soạn thêm dựa trên nội dung bài học**, không phải nguyên văn những đề kiểm tra có sẵn trong PDF.
- Hãy thay link Google Form thật của nhóm, kiểm tra nguồn, nội dung, quyền sử dụng ảnh/video và địa chỉ liên hệ nếu có.

## Tham khảo
- https://accdragon123s-max.github.io/WISEFO/
- https://courses.lumenlearning.com/lumencollegesuccessxtraining/chapter/critical-thinking-skills/
- https://openstax.org/details/books/college-success
