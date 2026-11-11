/* LOGIQ · Nội dung lý thuyết bổ sung cho website gốc.
   Giữ nguyên giao diện trang chủ, phần thực hành và bài kiểm tra cũ.
   Cài đặt: thêm <script src="logiq-ly-thuyet.js"></script> trước </body> trong index.html. */
(() => {
'use strict';
const lessons = [{"title":"Nhận diện thông tin & tư duy phản biện","tag":"BUỔI 01","icon":"🧠","minutes":"45 phút","lead":"Học cách phân biệt nhận định, sự thật, ý kiến và giả định; đặt câu hỏi trước khi tin hoặc phản bác.","objectives":["Giải thích tư duy phản biện là gì và không phải là gì.","Phân biệt phát biểu thực tế, ý kiến và giả định.","Vận dụng 5W1H để làm rõ một thông tin chưa chắc chắn."],"parts":[{"h":"01. Tư duy phản biện là gì?","html":"<p><strong>Tư duy phản biện (critical thinking)</strong> là quá trình phân tích thông tin, đặt câu hỏi về căn cứ, đánh giá cách lập luận và cân nhắc nhiều khả năng trước khi kết luận. Mục tiêu không phải tìm lỗi bằng mọi giá mà là đưa ra quyết định có lý do và có thể điều chỉnh khi xuất hiện bằng chứng mới.</p><div class=\"tip\"><strong>Quy tắc LOGIQ:</strong> Nhận định → Câu hỏi → Bằng chứng → Đánh giá → Kết luận tạm thời.</div><p>Ví dụ: Nếu nghe “AI khiến sinh viên lười suy nghĩ”, thay vì đồng ý hoặc bác bỏ ngay, ta hỏi: “Dùng AI trong tình huống nào? Có dữ liệu không? Có người dùng AI để học chủ động không?”</p>"},{"h":"02. Sự thật, phát biểu thực tế, ý kiến và giả định","html":"<div class=\"term-grid\"><div><strong>Sự thật (fact)</strong><p>Điều thực sự đúng và có thể được xác nhận bằng căn cứ phù hợp. Ví dụ: “Một tuần có bảy ngày”.</p></div><div><strong>Phát biểu thực tế (factual claim)</strong><p>Khẳng định có thể kiểm chứng đúng/sai, nhưng chưa chắc đã đúng. Ví dụ: “90% sinh viên đạt điểm cao nhờ AI”.</p></div><div><strong>Ý kiến (opinion)</strong><p>Nhận xét, đánh giá hoặc sở thích. Ví dụ: “Học buổi sáng thú vị hơn buổi tối”.</p></div><div><strong>Giả định (assumption)</strong><p>Điều được tạm coi là đúng để lập luận tiếp. Ví dụ: “Tất cả sinh viên đều có máy tính cá nhân”.</p></div></div><p>Một câu có thể chứa <em>cả dữ kiện lẫn đánh giá</em>. Hãy tách từng phần để kiểm tra đúng cách.</p>"},{"h":"03. Bằng chứng và suy luận","html":"<p><strong>Bằng chứng</strong> có thể là dữ liệu, kết quả quan sát, tài liệu gốc hoặc nghiên cứu phù hợp. <strong>Suy luận</strong> là bước kết nối bằng chứng với kết luận. Không phải cứ có một số liệu là kết luận sẽ đúng.</p><div class=\"example\"><span>VÍ DỤ</span><p>“3 bạn trong lớp nói rằng học bằng video dễ hiểu hơn” là quan sát về 3 người; chưa đủ cơ sở kết luận <strong>mọi</strong> sinh viên đều học hiệu quả hơn bằng video.</p></div><p>Để đánh giá, hỏi: Bằng chứng có liên quan không? Có đáng tin không? Có đủ rộng không? Có giải thích thay thế nào khác không?</p>"},{"h":"04. Thiên kiến và lỗi tư duy phổ biến","html":"<ul><li><strong>Thiên kiến xác nhận (confirmation bias):</strong> ưu tiên thông tin củng cố niềm tin có sẵn và xem nhẹ chứng cứ trái chiều.</li><li><strong>Khái quát hóa vội vàng:</strong> từ vài trường hợp suy ra kết luận cho cả nhóm.</li><li><strong>Đánh đồng tương quan với nhân quả:</strong> hai hiện tượng diễn ra cùng nhau không tự chứng minh cái này gây ra cái kia.</li><li><strong>Khẳng định tuyệt đối:</strong> các từ “luôn”, “mọi”, “không bao giờ” thường đòi hỏi chứng cứ rất mạnh.</li></ul><div class=\"tip\"><strong>Mẹo:</strong> Chủ động hỏi “Trường hợp nào có thể khiến kết luận này sai?” để tránh chỉ tìm thông tin đồng tình với mình.</div>"},{"h":"05. Bộ câu hỏi 5W1H","html":"<div class=\"term-grid small\"><div><strong>Who?</strong><p>Ai nói? Ai liên quan? Người đó có chuyên môn không?</p></div><div><strong>What?</strong><p>Chính xác điều gì đang được khẳng định?</p></div><div><strong>When?</strong><p>Thông tin được đưa ra khi nào? Còn phù hợp không?</p></div><div><strong>Where?</strong><p>Thông tin xuất hiện ở đâu? Trong bối cảnh nào?</p></div><div><strong>Why?</strong><p>Vì sao người viết đưa ra nhận định ấy?</p></div><div><strong>How?</strong><p>Họ có kết luận đó bằng phương pháp hoặc dữ liệu nào?</p></div></div><p><strong>Thực hành nhanh:</strong> Với câu “Mọi sinh viên đều nên bỏ ghi chép tay”, hãy viết 2 câu hỏi theo 5W1H rồi tìm một phản ví dụ.</p>"}],"quiz":[{"q":"Một bài viết khẳng định “85% sinh viên thích học trực tuyến” nhưng không dẫn khảo sát. Đây là gì?","options":["Một sự thật đã được xác minh","Một phát biểu thực tế cần kiểm chứng","Một ý kiến về sở thích của người viết"],"a":1,"why":"Tỷ lệ 85% là tuyên bố có thể kiểm chứng bằng dữ liệu, nhưng chưa thể coi là đúng khi thiếu nguồn."},{"q":"Khi chỉ đọc các bài ủng hộ quan điểm của mình, ta dễ mắc lỗi nào?","options":["Thiên kiến xác nhận","Kiểm chứng độc lập","Tư duy đa chiều"],"a":0,"why":"Thiên kiến xác nhận khiến ta bỏ sót hoặc xem nhẹ thông tin bất lợi cho niềm tin ban đầu."},{"q":"Câu hỏi “Ai là tác giả của thông tin này?” thuộc nhóm nào?","options":["Why","Who","How"],"a":1,"why":"Who nhằm xác định chủ thể phát biểu và người liên quan."}],"summary":["Tư duy phản biện là kiểm tra lý lẽ, không phải cãi cho thắng.","Một nhận định có thể kiểm chứng không có nghĩa là nó đã được chứng minh đúng.","5W1H giúp phát hiện thông tin và bối cảnh còn thiếu."]},{"title":"Kiểm chứng thông tin trên Internet","tag":"BUỔI 02","icon":"🌐","minutes":"45 phút","lead":"Tìm nguồn gốc, đọc ngang qua nhiều nguồn và nhận ra nội dung giật gân hoặc thiếu ngữ cảnh.","objectives":["Phát hiện dấu hiệu thông tin đáng nghi trên mạng.","Áp dụng mô hình SIFT để kiểm tra nguồn.","Biết vì sao nhiều bài đăng giống nhau chưa chắc là nhiều nguồn độc lập."],"parts":[{"h":"01. Vì sao tin sai dễ lan truyền?","html":"<p>Nội dung trên Internet có thể bị hiểu sai, thiếu ngữ cảnh, đăng lại từ nguồn cũ hoặc cố tình dẫn dắt người đọc. Lượt thích, lượt chia sẻ và thiết kế đẹp <strong>không phải</strong> bằng chứng bảo đảm chính xác.</p><p><strong>Thông tin sai lệch</strong> có thể được chia sẻ dù người đăng tin là đúng; <strong>thông tin cố ý gây hiểu lầm</strong> liên quan đến ý định đánh lừa. Khi chưa có căn cứ, ta không nên tự kết luận động cơ của người đăng.</p><div class=\"example\"><span>VÍ DỤ</span><p>Một ảnh chụp lễ khai giảng năm trước được đăng lại với chú thích “Sự kiện hôm nay”. Ảnh có thể là ảnh thật, nhưng <strong>chú thích sai ngữ cảnh</strong>.</p></div>"},{"h":"02. Quy trình SIFT: 4 bước kiểm chứng","html":"<p><strong>SIFT</strong> là bộ bốn thao tác kiểm tra thông tin trực tuyến do Mike Caulfield phổ biến:</p><ol><li><strong>Stop – Dừng lại:</strong> xác định bạn đang muốn kiểm tra điều gì, đừng vội chia sẻ.</li><li><strong>Investigate the source – Tìm hiểu nguồn:</strong> người đăng là ai, có chuyên môn, trách nhiệm hoặc lợi ích liên quan không?</li><li><strong>Find better coverage – Tìm nguồn tốt hơn:</strong> xem các nguồn độc lập và đáng tin khác nói gì về cùng nhận định.</li><li><strong>Trace to original – Truy về nguồn gốc:</strong> tìm tài liệu, video, câu trích hoặc dữ liệu ban đầu để kiểm tra đúng ngữ cảnh.</li></ol><div class=\"tip\"><strong>Ghi nhớ:</strong> SIFT không đồng nghĩa với “chỉ cần xem trang có đuôi .edu hoặc .gov”. Chính nội dung, tác giả, chứng cứ và bối cảnh mới là yếu tố cần kiểm tra.</div>"},{"h":"03. Đọc ngang và đối chiếu nguồn độc lập","html":"<p><strong>Đọc ngang (lateral reading)</strong> nghĩa là tạm rời trang đang đọc để tìm xem nguồn khác nói gì về tác giả, tổ chức và nhận định. Điều này hữu ích hơn việc chỉ tin dòng “About us” do chính trang đó viết.</p><p><strong>Độc lập</strong> không phải chỉ là “hai website khác tên”. Nếu cả hai đều chép lại một bài gốc không có chứng cứ, ta vẫn chỉ có một nguồn chưa kiểm chứng.</p><div class=\"example\"><span>TÌNH HUỐNG</span><p>Hai fanpage cùng đăng “Ngày mai toàn trường nghỉ học”, nhưng đều lấy từ một ảnh chụp màn hình vô danh. Cách làm đúng: tìm thông báo ở kênh chính thức của trường và kiểm tra thời điểm thông báo.</p></div>"},{"h":"04. Kiểm tra ảnh, video và nội dung do AI tạo","html":"<ul><li>Đối chiếu ảnh với nguồn đăng đầu tiên, ngày tháng và địa điểm; tìm xem ảnh đã xuất hiện trong sự kiện cũ chưa.</li><li>Xem video đầy đủ hoặc bối cảnh trước và sau đoạn cắt ngắn.</li><li>Với một phát biểu được gán cho người nổi tiếng hoặc tổ chức, tìm thông báo hoặc bản ghi gốc.</li><li>Công cụ nhận diện nội dung AI và dấu hiệu hình ảnh chỉ là <em>manh mối</em>, không nên dùng riêng một kết quả để kết luận chắc chắn.</li></ul><div class=\"tip\"><strong>Phân biệt:</strong> “Chưa kiểm chứng được” khác với “đã chứng minh là sai”. Nếu chưa có dữ liệu, kết luận phù hợp có thể là <em>chưa đủ căn cứ</em>.</div>"},{"h":"05. Nhận biết clickbait và tự xây danh sách kiểm tra","html":"<p><strong>Clickbait</strong> là cách viết tiêu đề cố gây tò mò hoặc cảm xúc mạnh để thúc đẩy nhấp vào. Tiêu đề giật gân <em>không tự chứng minh</em> bài viết sai, nhưng là tín hiệu cần kiểm tra kỹ.</p><ul><li>Tiêu đề có phóng đại, “sốc”, “không ai ngờ”, hoặc bỏ qua thông tin trọng tâm không?</li><li>Có tác giả, thời gian, bằng chứng và liên kết tới nguồn gốc không?</li><li>Hình ảnh/số liệu có bị cắt khỏi ngữ cảnh không?</li><li>Các nguồn độc lập đáng tin có xác nhận nội dung chính không?</li></ul><p><strong>Thực hành nhanh:</strong> Chọn một thông tin trên mạng, viết 4 thao tác SIFT bạn sẽ thực hiện trước khi chia sẻ.</p>"}],"quiz":[{"q":"Ba trang web đăng cùng một tin nhưng đều trích từ một bài vô danh. Bạn có bao nhiêu nguồn xác minh độc lập?","options":["Ba nguồn độc lập","Chưa xác định được nguồn xác minh độc lập","Tin đã chắc chắn đúng"],"a":1,"why":"Bản sao của cùng nguồn không tạo ra các xác nhận độc lập."},{"q":"Trong SIFT, chữ T nhắc bạn làm gì?","options":["Truy ngược thông tin về ngữ cảnh gốc","Tin trang có nhiều lượt thích","Thử hỏi AI để kết luận ngay"],"a":0,"why":"Trace giúp tìm tuyên bố, trích dẫn hoặc hình ảnh trong nguồn và bối cảnh ban đầu."},{"q":"Thấy một video có vẻ do AI tạo, đâu là kết luận thận trọng nhất?","options":["Chắc chắn giả vì hình ảnh có vẻ lạ","Chắc chắn thật vì âm thanh tự nhiên","Kiểm tra nguồn và bối cảnh trước khi kết luận"],"a":2,"why":"Một dấu hiệu trực quan không đủ để phân loại chắc chắn nội dung thật hay giả."}],"summary":["Đừng nhầm độ lan truyền với độ đáng tin.","Dùng SIFT: Stop, Investigate, Find better coverage, Trace.","Nếu thiếu chứng cứ, hãy nói rõ “chưa thể xác minh”."]},{"title":"Đánh giá thông tin học thuật","tag":"BUỔI 03","icon":"📚","minutes":"50 phút","lead":"Đọc nghiên cứu đúng phạm vi, xem xét phương pháp và kiểm tra những trích dẫn do AI gợi ý.","objectives":["Xác định các phần cơ bản của một bài báo khoa học.","Đánh giá độ tin cậy bằng phương pháp, dữ liệu và giới hạn.","Biết cách xác minh tài liệu do AI đề xuất trước khi trích dẫn."],"parts":[{"h":"01. Thông tin học thuật khác bài đăng phổ thông thế nào?","html":"<p>Tài liệu học thuật thường trình bày <strong>câu hỏi nghiên cứu</strong>, cách tiến hành, kết quả và giới hạn. Tài liệu có thể được công bố ở tạp chí, hội nghị hoặc kho bản thảo; <strong>không phải nguồn nào cũng trải qua cùng một quy trình phản biện</strong>.</p><p>Các phần thường gặp: <strong>Abstract</strong> (tóm tắt), <strong>Introduction</strong> (đặt vấn đề), <strong>Methods</strong> (phương pháp), <strong>Results</strong> (kết quả), <strong>Discussion</strong> (diễn giải), <strong>References</strong> (tài liệu tham khảo). Cấu trúc có thể khác tùy lĩnh vực.</p>"},{"h":"02. Đánh giá tác giả, nguồn và tính phù hợp","html":"<ul><li><strong>Tác giả:</strong> danh tính, đơn vị công tác, chuyên môn liên quan có rõ không?</li><li><strong>Nơi công bố:</strong> tên tạp chí/hội nghị, trạng thái công bố, thông tin xuất bản có kiểm tra được không?</li><li><strong>Thời gian:</strong> nghiên cứu còn phù hợp với câu hỏi hiện tại không?</li><li><strong>Mức độ liên quan:</strong> bài có thực sự trả lời câu hỏi của nhóm hay chỉ có tiêu đề gần giống?</li><li><strong>Tính minh bạch:</strong> có mô tả phương pháp, dữ liệu, giới hạn hoặc xung đột lợi ích không?</li></ul><div class=\"tip\"><strong>Lưu ý:</strong> Có uy tín hay được trích dẫn nhiều vẫn không thay thế việc xem xét phương pháp và kết quả cụ thể.</div>"},{"h":"03. Đọc số liệu: mẫu, sai lệch và tính đại diện","html":"<p><strong>Mẫu (sample)</strong> là nhóm thực tế được quan sát; <strong>quần thể (population)</strong> là nhóm mà nhà nghiên cứu muốn hiểu. Nếu khảo sát 18 người ở một lớp, kết luận về tất cả sinh viên Việt Nam có thể vượt quá phạm vi dữ liệu.</p><p>Hãy hỏi: mẫu được chọn thế nào, đủ phù hợp với mục tiêu không, có nhóm nào bị bỏ sót, biến được đo bằng cách gì? Bài nghiên cứu có công bố các giới hạn không?</p><div class=\"example\"><span>VÍ DỤ</span><p>“12/18 người thích công cụ A” có thể mô tả <strong>nhóm 18 người được hỏi</strong>, nhưng không cho phép khẳng định “đa số sinh viên cả nước thích công cụ A”.</p></div>"},{"h":"04. Tương quan không tự chứng minh nhân quả","html":"<p><strong>Tương quan (correlation)</strong> mô tả hai biến thay đổi cùng nhau. <strong>Quan hệ nhân quả (causation)</strong> đòi hỏi lập luận và thiết kế nghiên cứu phù hợp hơn để chỉ ra một biến ảnh hưởng đến biến khác.</p><p>Ví dụ: nếu sinh viên ngủ đủ thường đạt điểm tốt hơn, ta chưa thể kết luận <em>chỉ cần ngủ thêm chắc chắn làm GPA tăng</em>. Các yếu tố khác như sức khỏe, lịch học hoặc điều kiện học tập có thể liên quan.</p><p>Khi trình bày kết quả, dùng những từ phù hợp mức độ chứng cứ: “có liên hệ”, “được quan sát thấy”, “nghiên cứu gợi ý” thay vì tự ý biến thành “chắc chắn gây ra”.</p>"},{"h":"05. Kiểm tra trích dẫn và AI có trách nhiệm","html":"<p>AI có thể tóm tắt rất thuận tiện nhưng cũng có thể tạo <strong>tên bài, tác giả, năm hoặc DOI không tồn tại</strong>, hoặc mô tả sai kết quả. Vì vậy cần:</p><ol><li>Tìm <strong>bài gốc</strong> qua nơi công bố hoặc thư viện học thuật.</li><li>Đối chiếu tiêu đề, tác giả, năm, nơi công bố và DOI (nếu có).</li><li>Đọc Abstract, Methods, Results và giới hạn; không chỉ chép lời tóm tắt của AI.</li><li>Chỉ trích dẫn điều bài thực sự hỗ trợ, kèm bối cảnh và phạm vi.</li></ol><div class=\"tip\"><strong>Thực hành:</strong> Hãy thử viết 2 câu: “Kết quả nghiên cứu cho thấy…” và “Tuy nhiên, nghiên cứu có giới hạn…” khi đọc một tài liệu.</div>"}],"quiz":[{"q":"Một khảo sát 18 người cùng lớp đủ để khẳng định điều gì?","options":["Kết quả đại diện cho cả nước","Có thể mô tả nhóm 18 người đó, nhưng khó khái quát rộng","Mọi kết quả đều vô giá trị"],"a":1,"why":"Phạm vi kết luận cần phù hợp với mẫu và cách chọn mẫu."},{"q":"AI đưa ra tên bài báo và DOI. Bước tiếp theo phù hợp nhất là gì?","options":["Trích dẫn ngay","Đối chiếu bài gốc, tác giả và DOI","Chỉ kiểm tra xem tiêu đề nghe hấp dẫn không"],"a":1,"why":"AI có thể đưa ra thông tin trích dẫn sai hoặc không tồn tại."},{"q":"Hai biến có tương quan, kết luận nào đúng?","options":["Chắc chắn có quan hệ nhân quả","Không bao giờ có liên quan","Cần nghiên cứu thêm trước khi kết luận nguyên nhân"],"a":2,"why":"Tương quan đơn thuần không đủ để xác lập quan hệ nhân quả."}],"summary":["Ưu tiên đánh giá phương pháp, dữ liệu và giới hạn, không chỉ tên tạp chí.","Không khái quát kết quả vượt quá mẫu nghiên cứu.","Trích dẫn do AI gợi ý phải được kiểm tra từ nguồn gốc."]},{"title":"Lập luận & bảo vệ quan điểm","tag":"BUỔI 04","icon":"🎙️","minutes":"50 phút","lead":"Xây dựng luận điểm có bằng chứng, nhận diện ngụy biện và tranh luận tôn trọng người đối thoại.","objectives":["Phân biệt luận điểm, lý do và bằng chứng.","Nhận diện một số lỗi lập luận thường gặp.","Trình bày phản biện có cấu trúc và phản hồi ý kiến trái chiều."],"parts":[{"h":"01. Cấu trúc một lập luận có căn cứ","html":"<p>Một lập luận thuyết phục không chỉ cần ý kiến mạnh mẽ; nó cần <strong>luận điểm</strong> (điều muốn chứng minh), <strong>lý do</strong> (vì sao nên chấp nhận) và <strong>bằng chứng</strong> (điều hỗ trợ lý do đó).</p><div class=\"example\"><span>VÍ DỤ</span><p><strong>Luận điểm:</strong> “Trường nên mở thêm không gian tự học yên tĩnh”.<br><strong>Lý do:</strong> “Sinh viên cần nơi ít bị phân tâm khi làm bài nhóm hoặc ôn thi”.<br><strong>Bằng chứng cần thu thập:</strong> khảo sát nhu cầu, số chỗ ngồi hiện tại, mức sử dụng vào giờ cao điểm.</p></div><p>Điều quan trọng là liên kết: bằng chứng này có thực sự hỗ trợ lý do, và lý do có dẫn hợp lý đến luận điểm không?</p>"},{"h":"02. Mô hình CER: Claim – Evidence – Reasoning","html":"<ol><li><strong>Claim – Luận điểm:</strong> khẳng định cụ thể, không quá mơ hồ.</li><li><strong>Evidence – Bằng chứng:</strong> thông tin xác thực và có liên quan.</li><li><strong>Reasoning – Giải thích:</strong> nói rõ vì sao bằng chứng ủng hộ luận điểm; nêu điều kiện hoặc giới hạn nếu cần.</li></ol><div class=\"tip\"><strong>Mẫu diễn đạt:</strong> “Tôi cho rằng … vì … Bằng chứng là … Điều này cho thấy … Tuy nhiên, kết luận còn phụ thuộc vào …”</div><p><strong>Thực hành nhanh:</strong> Dùng CER để bảo vệ nhận định “Nên hướng dẫn sinh viên cách kiểm tra câu trả lời của AI”.</p>"},{"h":"03. Những ngụy biện cần tránh","html":"<ul><li><strong>Công kích cá nhân (ad hominem):</strong> bác bỏ ý kiến chỉ bằng cách chê người đưa ra nó, thay vì xem xét lý lẽ.</li><li><strong>Người rơm (straw man):</strong> bóp méo quan điểm của người khác thành phiên bản dễ công kích hơn.</li><li><strong>Lưỡng phân giả (false dilemma):</strong> chỉ đưa ra hai lựa chọn cực đoan trong khi còn phương án khác.</li><li><strong>Khái quát hóa vội vàng:</strong> lấy vài ví dụ làm kết luận cho tất cả.</li><li><strong>Viện dẫn số đông:</strong> coi một điều đúng chỉ vì nhiều người tin.</li></ul><div class=\"example\"><span>VÍ DỤ</span><p>“Hoặc cấm AI hoàn toàn, hoặc sinh viên sẽ không biết tự học” có thể là <strong>lưỡng phân giả</strong>, vì vẫn có lựa chọn dùng AI có hướng dẫn và tự kiểm chứng.</p></div>"},{"h":"04. Phản biện và xử lý quan điểm trái chiều","html":"<p>Phản biện tốt bắt đầu bằng <strong>nghe đúng</strong> quan điểm đối phương. Có thể tóm tắt lại điều họ nói, hỏi chỗ chưa rõ rồi mới nêu vấn đề về căn cứ hoặc cách suy luận.</p><ol><li><strong>Nhắc lại:</strong> “Mình hiểu ý bạn là …, có đúng không?”</li><li><strong>Đề nghị căn cứ:</strong> “Bạn đang dựa trên dữ liệu hay trường hợp nào?”</li><li><strong>Nêu phản ví dụ:</strong> “Nếu xuất hiện trường hợp … thì kết luận có cần điều chỉnh không?”</li><li><strong>Đề xuất điểm chung:</strong> “Hai bên đều quan tâm đến …, vậy ta thử xem xét phương án …”</li></ol><p>Thừa nhận điểm hợp lý của ý kiến trái chiều không làm lập luận yếu đi; điều đó cho thấy bạn đang đánh giá bằng chứng nghiêm túc.</p>"},{"h":"05. Trình bày quan điểm ngắn gọn, xây dựng","html":"<p>Trong 60–90 giây, có thể trình bày theo 5 bước: <strong>(1)</strong> nêu vấn đề, <strong>(2)</strong> đưa luận điểm, <strong>(3)</strong> nêu lý do và bằng chứng, <strong>(4)</strong> thừa nhận giới hạn/ý kiến khác, <strong>(5)</strong> kết luận có điều kiện.</p><div class=\"tip\"><strong>Kiểm tra lần cuối:</strong> Tôi đã phân biệt rõ dữ kiện và ý kiến chưa? Bằng chứng đến từ đâu? Có phản ví dụ không? Cách nói có tôn trọng người nghe không?</div><p><strong>Thực hành nhanh:</strong> Chọn chủ đề “Có nên dùng AI để hỗ trợ làm bài tập?” rồi viết một đoạn CER, sau đó bổ sung một ý kiến phản đối hợp lý và câu trả lời.</p>"}],"quiz":[{"q":"Trong CER, chữ E là gì?","options":["Emotion – cảm xúc","Evidence – bằng chứng","Example – ví dụ duy nhất"],"a":1,"why":"CER gồm Claim, Evidence và Reasoning."},{"q":"“Đừng nghe ý kiến của Minh vì Minh học kém” là lỗi nào?","options":["Công kích cá nhân","Đối chiếu chứng cứ","Phản biện về nội dung"],"a":0,"why":"Lời nói nhắm vào người đưa ra nhận định thay vì chất lượng lý lẽ."},{"q":"Bạn nhận được bằng chứng tốt trái với luận điểm ban đầu. Bạn nên làm gì?","options":["Bỏ qua để bảo vệ quan điểm","Công kích người đưa bằng chứng","Đánh giá lại và sẵn sàng điều chỉnh kết luận"],"a":2,"why":"Khả năng cập nhật quan điểm khi có bằng chứng mới là đặc trưng của tư duy phản biện."}],"summary":["Lập luận cần luận điểm, bằng chứng và giải thích mối liên hệ.","Tránh công kích cá nhân, người rơm và lựa chọn giả tạo.","Phản biện nhằm hiểu vấn đề tốt hơn, không chỉ giành chiến thắng."]}];
const KEY = 'logiq-ly-thuyet-inline-v1';
let current = 0;
let solved = [];
let completed = Array(4).fill(false);
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
  if (Array.isArray(saved)) completed = completed.map((_,i) => saved[i] === true);
} catch (_) { /* Có thể trình duyệt chặn lưu trữ. */ }
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = (selector,scope=document) => scope.querySelector(selector);
const $$ = (selector,scope=document) => Array.from(scope.querySelectorAll(selector));
let area;

function setup() {
  if (document.getElementById('ly-thuyet') || !document.getElementById('thuc-hanh')) return;
  const css = document.createElement('style');
  css.textContent = `
#ly-thuyet{background:#eef4f0;scroll-margin-top:77px}
#ly-thuyet[hidden]{display:none!important}
#ly-thuyet .lt-shell{display:grid;grid-template-columns:250px minmax(0,1fr);gap:24px;align-items:start}
#ly-thuyet .lt-menu,#ly-thuyet .lt-panel{background:#fff;border:1px solid #e3e9e6;border-radius:22px;overflow:hidden;box-shadow:0 14px 35px #142a1d0a}
#ly-thuyet .lt-menu{padding:16px;position:sticky;top:96px}
#ly-thuyet .lt-menu-heading{margin:1px 6px 14px;color:#0d8e84;font-size:11px;font-weight:900;letter-spacing:1px}
#ly-thuyet .lt-tab{display:flex;align-items:center;gap:10px;text-align:left;width:100%;padding:13px 11px;margin:5px 0;background:#fff;border:1px solid transparent;border-radius:12px;color:#13243a;font-weight:800;cursor:pointer}
#ly-thuyet .lt-tab:hover{background:#f1f7f3}
#ly-thuyet .lt-tab.active{background:#e4f6ed;border-color:#baddce}
#ly-thuyet .lt-tab-num{flex:none;display:grid;place-items:center;width:37px;height:37px;background:#f0f5f2;border:1px solid #e3e9e6;border-radius:10px;font-size:12px}
#ly-thuyet .lt-tab-title{font-size:12px;line-height:1.45}
#ly-thuyet .lt-tab-title small{font-size:11px;color:#637286;display:block;font-weight:500;margin-top:2px}
#ly-thuyet .lt-progress{padding:15px 7px 0;margin-top:15px;border-top:1px solid #e3e9e6}
#ly-thuyet .lt-progress-text{font-size:12px;color:#637286;display:flex;justify-content:space-between;gap:8px}
#ly-thuyet .lt-progress-bar{height:8px;background:#e5ede8;border-radius:20px;overflow:hidden;margin-top:9px}
#ly-thuyet .lt-progress-bar span{height:100%;background:#0d8e84;display:block;transition:width .25s}
#ly-thuyet .lt-head{padding:30px 34px 27px;background:linear-gradient(115deg,#e9f7ef,#f9fcfa);border-bottom:1px solid #e3e9e6}
#ly-thuyet .lt-head .eyebrow{font-size:11px}
#ly-thuyet .lt-head h3{font-size:clamp(24px,3.2vw,35px);letter-spacing:-1.1px;line-height:1.22;margin:17px 0 9px;color:#13243a}
#ly-thuyet .lt-head p{color:#637286;font-size:14px;line-height:1.7;margin:0}
#ly-thuyet .lt-outcomes{background:#fff;padding:15px 20px;border:1px solid #dfebe3;border-radius:14px;margin-top:19px;font-size:13px;color:#344e42}
#ly-thuyet .lt-outcomes ul{margin:6px 0 0;padding-left:18px}
#ly-thuyet .lt-outcomes li{margin:3px 0}
#ly-thuyet .lt-main{padding:5px 34px 30px}
#ly-thuyet .lt-part{padding:23px 0;border-bottom:1px solid #e3e9e6}
#ly-thuyet .lt-part:last-child{border-bottom:0}
#ly-thuyet .lt-part h4{font-size:20px;font-weight:850;margin:0 0 10px;letter-spacing:-.4px;color:#13243a}
#ly-thuyet .lt-part p,#ly-thuyet .lt-part li{font-size:14px;line-height:1.8;color:#455968}
#ly-thuyet .lt-part p{margin:8px 0}
#ly-thuyet .lt-part ul,#ly-thuyet .lt-part ol{padding-left:23px;margin:9px 0}
#ly-thuyet .lt-part li{margin:7px 0}
#ly-thuyet .lt-part .tip,#ly-thuyet .lt-part .example{padding:13px 17px;border-radius:12px;background:#e7f5ed;border-left:3px solid #0d8e84;color:#254c42;margin:15px 0;font-size:13px}
#ly-thuyet .lt-part .example{background:#fff8e8;border-color:#e0af4e}
#ly-thuyet .lt-part .example p{margin:6px 0;color:#655637}
#ly-thuyet .lt-part .term-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:13px 0}
#ly-thuyet .lt-part .term-grid.small{grid-template-columns:repeat(3,minmax(0,1fr))}
#ly-thuyet .lt-part .term-grid>div{background:#f6faf7;border:1px solid #e3e9e6;border-radius:12px;padding:14px}
#ly-thuyet .lt-part .term-grid strong{font-size:13px}
#ly-thuyet .lt-check{background:#f6faf7;border-top:1px solid #e3e9e6;padding:29px 34px 32px}
#ly-thuyet .lt-check h4{font-size:24px;color:#13243a;margin:9px 0 4px;letter-spacing:-.6px}
#ly-thuyet .lt-sub{font-size:13px;color:#637286;margin:0 0 18px}
#ly-thuyet .lt-question{border:1px solid #dfebe3;border-radius:15px;background:#fff;margin:13px 0;padding:17px 18px}
#ly-thuyet .lt-question>strong{display:block;margin-bottom:13px;font-size:14px}
#ly-thuyet .lt-answers{display:grid;gap:8px}
#ly-thuyet .lt-answer{border:1px solid #e0e9e3;background:#fff;padding:12px 14px;border-radius:11px;text-align:left;font-size:13px;color:#203a46;font-weight:600;cursor:pointer}
#ly-thuyet .lt-answer:hover:not(:disabled){background:#f0f9f3;border-color:#8acaaa}
#ly-thuyet .lt-answer.correct{background:#dff5e7;border-color:#73c495}
#ly-thuyet .lt-answer.incorrect{background:#fff0e8;border-color:#e2aa86}
#ly-thuyet .lt-answer:disabled{cursor:default}
#ly-thuyet .lt-explain{border-radius:9px;background:#eff9f3;padding:10px 13px;color:#33634c;font-size:12px;margin-top:10px}
#ly-thuyet .lt-keypoints{background:#fff;border:1px solid #dfebe3;border-radius:14px;margin:23px 0;padding:19px}
#ly-thuyet .lt-keypoints strong{font-size:15px}
#ly-thuyet .lt-keypoints ul{padding-left:20px;margin:7px 0 0;color:#475b4d;font-size:13px}
#ly-thuyet .lt-keypoints li{margin:6px 0}
#ly-thuyet .lt-actions{display:flex;gap:11px;align-items:center;flex-wrap:wrap;margin-top:17px}
#ly-thuyet .lt-status{font-size:12px;color:#637286;margin-top:12px}
#ly-thuyet .lt-next{margin-top:24px;display:flex;justify-content:space-between;gap:10px}
#ly-thuyet .lt-next button{padding:10px 15px;border:1px solid #dce8df;background:#fff;color:#13243a;border-radius:12px;font-size:13px;font-weight:750}
#ly-thuyet .lt-next button:disabled{opacity:.45;cursor:default}
#ly-thuyet .lt-sources{font-size:11px;color:#637286;margin:20px 0 0}
#ly-thuyet .lt-sources a{color:#0d8e84;text-decoration:underline}
@media(max-width:830px){#ly-thuyet .lt-shell{grid-template-columns:1fr}#ly-thuyet .lt-menu{position:static}#ly-thuyet .lt-tabs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px}#ly-thuyet .lt-tab{margin:0}}
@media(max-width:550px){#ly-thuyet .lt-head,#ly-thuyet .lt-main,#ly-thuyet .lt-check{padding-left:20px;padding-right:20px}#ly-thuyet .lt-part .term-grid,#ly-thuyet .lt-part .term-grid.small{grid-template-columns:1fr}#ly-thuyet .lt-tab{padding:9px 7px}#ly-thuyet .lt-tab-title{font-size:11px}#ly-thuyet .lt-tab-num{width:30px;height:30px}#ly-thuyet .lt-next button{flex:1}#ly-thuyet .lt-actions .btn{width:100%}}
`;
  document.head.appendChild(css);
  area = document.createElement('section');
  area.id = 'ly-thuyet';
  area.className = 'section';
  area.hidden = true;
  area.setAttribute('aria-label','Nội dung lý thuyết của các buổi học');
  area.innerHTML = `<div class="wrap">
      <div class="section-heading"><span class="eyebrow">02 / HỌC LÝ THUYẾT</span>
      <h2>Hiểu bản chất. Tư duy độc lập.</h2>
      <p>Chọn một buổi học để đọc kiến thức, xem ví dụ và trả lời câu hỏi ôn tập trước khi thực hành.</p></div>
      <div class="lt-shell"><aside class="lt-menu"><div class="lt-menu-heading">CHỌN BUỔI HỌC</div><div class="lt-tabs" id="lt-tabs"></div>
      <div class="lt-progress"><div class="lt-progress-text"><b>Tiến độ lý thuyết</b><span id="lt-progress-text">0/4</span></div><div class="lt-progress-bar"><span id="lt-progress-fill" style="width:0"></span></div></div></aside>
      <article class="lt-panel" id="lt-panel" aria-live="polite"></article></div></div>`;
  document.getElementById('thuc-hanh').before(area);
  area.addEventListener('click', onAreaClick);
}
function updateTabs() {
  $('#lt-tabs',area).innerHTML = lessons.map((l,i) => `<button type="button" class="lt-tab ${i===current?'active':''}" data-lt-session="${i}" ${i===current?'aria-current="step"':''}>
      <span class="lt-tab-num">${completed[i]?'✓':String(i+1).padStart(2,'0')}</span>
      <span class="lt-tab-title">${esc(l.title)}<small>${esc(l.minutes)}${completed[i]?' · Đã hoàn thành':''}</small></span></button>`).join('');
  const n=completed.filter(Boolean).length;
  $('#lt-progress-text',area).textContent=`${n}/4`;
  $('#lt-progress-fill',area).style.width=`${n*25}%`;
}
function render() {
  const l=lessons[current];
  solved=Array(l.quiz.length).fill(false);
  updateTabs();
  const parts=l.parts.map(p=>`<div class="lt-part"><h4>${p.h}</h4>${p.html}</div>`).join('');
  const questions=l.quiz.map((q,qi)=>`<div class="lt-question" data-lt-question="${qi}"><strong>Câu ${qi+1}. ${esc(q.q)}</strong>
    <div class="lt-answers">${q.options.map((a,j)=>`<button class="lt-answer" type="button" data-lt-q="${qi}" data-lt-a="${j}">${String.fromCharCode(65+j)}. ${esc(a)}</button>`).join('')}</div>
    <div class="lt-explain" hidden></div></div>`).join('');
  $('#lt-panel',area).innerHTML=`<div class="lt-head"><span class="eyebrow">${l.icon} ${esc(l.tag)} · ${esc(l.minutes)}</span>
    <h3>${esc(l.title)}</h3><p>${esc(l.lead)}</p><div class="lt-outcomes"><strong>🎯 Sau buổi học, bạn có thể:</strong><ul>${l.objectives.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div></div>
    <div class="lt-main">${parts}</div>
    <div class="lt-check" id="tu-kiem-tra"><span class="eyebrow">ÔN TẬP KIẾN THỨC</span><h4>Thử xem bạn đã hiểu bài chưa?</h4>
      <p class="lt-sub">3 câu hỏi ngắn. Trả lời sai có thể chọn lại, trả lời đúng sẽ có giải thích.</p>${questions}
      <div class="lt-keypoints"><strong>💡 Ba điều quan trọng cần nhớ</strong><ul>${l.summary.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div>
      <div class="lt-actions"><span id="lt-finished" class="btn btn-outline" aria-live="polite">${completed[current]?'✓ Đã hoàn thành':'Chưa hoàn thành ôn tập'}</span>
      <button type="button" class="btn btn-dark" data-lt-practice="${current}">Làm 6 câu thực hành ↗</button></div>
      <p class="lt-status" id="lt-status">${completed[current]?'Đã lưu tiến độ trên trình duyệt này.':'Trả lời đúng cả 3 câu để tự động ghi nhận hoàn thành. Bạn có thể sang phần thực hành bất cứ lúc nào.'}</p>
      <div class="lt-next"><button type="button" data-lt-move="-1" ${current===0?'disabled':''}>← Buổi trước</button>
      <button type="button" data-lt-move="1">${current===3?'Về buổi 1 ↺':'Buổi tiếp theo →'}</button></div>
      <p class="lt-sources">Nguồn tìm hiểu thêm: <a href="https://courses.lumenlearning.com/lumencollegesuccessxtraining/chapter/critical-thinking-skills/" target="_blank" rel="noopener noreferrer">Lumen Learning</a> · <a href="https://openstax.org/details/books/college-success" target="_blank" rel="noopener noreferrer">OpenStax</a>. Nội dung được biên soạn lại cho dự án LOGIQ.</p>
    </div>`;
}
function show(i) {
  if (!Number.isInteger(i) || i<0 || i>=lessons.length) return;
  setup();
  if (!area) return;
  current=i;
  area.hidden=false;
  render();
  // Giữ người học trong trang LOGIQ gốc, chuyển đến phần nội dung mới.
  area.scrollIntoView({behavior:'smooth',block:'start'});
}
function chooseAnswer(qi,ai) {
  if (solved[qi]) return;
  const q=lessons[current].quiz[qi];
  if (!q) return;
  const root=$(`[data-lt-question="${qi}"]`,area);
  if (!root) return;
  $$('.lt-answer',root).forEach(b=>b.classList.remove('incorrect'));
  const chosen=$(`[data-lt-q="${qi}"][data-lt-a="${ai}"]`,root);
  const explain=$('.lt-explain',root);
  if (ai!==q.a) {
    chosen.classList.add('incorrect');
    explain.textContent='Chưa chính xác. Hãy xem lại lý thuyết và thử lựa chọn khác.';
  } else {
    chosen.classList.add('correct');
    solved[qi]=true;
    $$('.lt-answer',root).forEach(b=>b.disabled=true);
    explain.textContent='✓ Chính xác! '+q.why;
    if (solved.every(Boolean)) {
      completed[current]=true;
      try {localStorage.setItem(KEY,JSON.stringify(completed))} catch(_) {}
      $('#lt-finished',area).textContent='✓ Đã hoàn thành';
      $('#lt-status',area).textContent='Hoàn thành 3/3 câu! Bạn có thể tiếp tục sang phần thực hành hoặc học buổi kế tiếp.';
      updateTabs();
    }
  }
  explain.hidden=false;
}
function onAreaClick(event) {
  const tab=event.target.closest('[data-lt-session]');
  if (tab) {show(Number(tab.dataset.ltSession));return}
  const answer=event.target.closest('[data-lt-q]');
  if (answer) {chooseAnswer(Number(answer.dataset.ltQ),Number(answer.dataset.ltA));return}
  const move=event.target.closest('[data-lt-move]');
  if (move) {const next=current+Number(move.dataset.ltMove);show(next>=4?0:next);return}
  const practice=event.target.closest('[data-lt-practice]');
  if (practice) {
    const i=Number(practice.dataset.ltPractice);
    const item=document.querySelector('#lessonList [data-lesson="'+i+'"]');
    if (item) item.click();
    document.getElementById('thuc-hanh').scrollIntoView({behavior:'smooth',block:'start'});
  }
}
function handleOriginalStart(event) {
  const btn=event.target.closest && event.target.closest('[data-open-lesson]');
  if (!btn) return;
  const i=Number(btn.dataset.openLesson);
  if (!Number.isInteger(i)||i<0||i>3) return;
  // Ngăn nút gốc đi thẳng xuống thực hành, chuyển vào nội dung lý thuyết.
  event.preventDefault();
  event.stopImmediatePropagation();
  show(i);
}
// Nghe ở pha bắt sự kiện để không ảnh hưởng các xử lý gốc trên trang.
document.addEventListener('click',handleOriginalStart,true);
if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup,{once:true});
else setup();
})();
