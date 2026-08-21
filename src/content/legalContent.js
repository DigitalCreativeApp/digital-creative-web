const section = (title, paragraphs = [], bullets = [], extra = {}) => ({ title, paragraphs, bullets, ...extra });

export const legalContent = {
  terms: {
    eyebrow: 'Pháp lý · Digital Creative',
    title: 'Điều khoản sử dụng',
    description: 'Quy định việc truy cập và sử dụng website, ứng dụng cùng các dịch vụ thuộc nền tảng Digital Creative.',
    version: '1.0',
    updated: '21/08/2026',
    notice: 'Tài liệu này là mẫu điều khoản sử dụng phục vụ vận hành nền tảng Digital Creative. Các thông tin về pháp nhân, địa chỉ, email hỗ trợ, cơ chế thanh toán, phí và giải quyết tranh chấp cần được đối chiếu với mô hình vận hành thực tế và rà soát pháp lý trước khi công bố chính thức.',
    contactDetails: [
      { label: 'Đơn vị vận hành', value: '[BỔ SUNG TÊN PHÁP NHÂN]' },
      { label: 'Website', value: '[BỔ SUNG WEBSITE]' },
      { label: 'Email hỗ trợ', value: '[BỔ SUNG EMAIL]' },
      { label: 'Địa chỉ', value: '[BỔ SUNG ĐỊA CHỈ]' },
    ],
    sections: [
      section('Giới thiệu và phạm vi áp dụng', [
        'Điều khoản sử dụng này (“Điều khoản”) điều chỉnh việc truy cập và sử dụng nền tảng Digital Creative, bao gồm website, ứng dụng di động, các tính năng, dịch vụ và hệ thống liên quan do đơn vị vận hành Digital Creative cung cấp (“Nền tảng”).',
        'Digital Creative là nền tảng công nghệ hỗ trợ kết nối Creative, freelancer, KOL/KOC, nhà sáng tạo nội dung với cá nhân, tổ chức, thương hiệu hoặc doanh nghiệp có nhu cầu thuê dịch vụ sáng tạo (“Khách hàng”). Tùy từng tính năng, người dùng có thể đồng thời đóng vai trò Creative và Khách hàng.',
        'Bằng việc đăng ký tài khoản, truy cập hoặc tiếp tục sử dụng Nền tảng, người dùng xác nhận đã đọc, hiểu và đồng ý chịu sự ràng buộc của Điều khoản này cùng các chính sách được công bố kèm theo.',
      ]),
      section('Điều kiện sử dụng và tài khoản', [
        'Người dùng phải đáp ứng điều kiện về năng lực hành vi và độ tuổi theo pháp luật áp dụng, đồng thời tuân thủ các yêu cầu độ tuổi của dịch vụ bên thứ ba khi sử dụng tính năng liên kết mạng xã hội.',
      ], [
        'Cung cấp thông tin đăng ký chính xác, đầy đủ và cập nhật khi cần thiết.',
        'Tự bảo mật thông tin đăng nhập, thiết bị, mã xác thực và các phương thức xác minh tài khoản.',
        'Không chuyển nhượng, cho thuê hoặc sử dụng tài khoản nhằm giả mạo người khác.',
        'Thông báo cho Digital Creative khi phát hiện truy cập trái phép hoặc nguy cơ mất an toàn tài khoản.',
      ], { afterBullets: ['Người dùng chịu trách nhiệm đối với hoạt động phát sinh từ tài khoản của mình trong phạm vi pháp luật cho phép, trừ trường hợp hoạt động phát sinh do lỗi của Nền tảng hoặc nguyên nhân khác mà người dùng không phải chịu trách nhiệm.'] }),
      section('Hồ sơ Creative và thông tin công khai', [
        'Creative có thể xây dựng hồ sơ nghề nghiệp bao gồm tên hiển thị, ảnh đại diện, giới thiệu, kỹ năng, nghề nghiệp, portfolio, dịch vụ, kinh nghiệm, mức giá tham khảo, đánh giá và các thông tin khác do Nền tảng hỗ trợ.',
        'Creative cam kết có quyền sử dụng và công bố các nội dung đưa lên hồ sơ. Digital Creative có thể áp dụng cơ chế xác minh đối với một số thông tin, nhưng việc hiển thị hồ sơ không mặc nhiên đồng nghĩa Digital Creative bảo đảm năng lực, danh tính, chất lượng hoặc kết quả công việc của Creative.',
      ]),
      section('Dự án, ứng tuyển và đề xuất', [
        'Khách hàng có thể đăng dự án hoặc nhu cầu tuyển Creative với mô tả công việc, ngân sách, thời hạn, địa điểm và các yêu cầu liên quan. Creative có thể ứng tuyển bằng hồ sơ, dịch vụ đã niêm yết hoặc đề xuất riêng theo chức năng của Nền tảng.',
      ], [
        'Thông tin dự án phải trung thực, hợp pháp và đủ rõ để bên còn lại đánh giá phạm vi công việc.',
        'Các bên có thể trao đổi, thương lượng giá, thời gian, phạm vi bàn giao và điều kiện thực hiện trước khi xác nhận thuê.',
        'Không được sử dụng dự án hoặc ứng tuyển để lừa đảo, spam, thu thập dữ liệu trái phép hoặc thực hiện giao dịch bị pháp luật cấm.',
      ]),
      section('Dịch vụ do Creative niêm yết', [
        'Creative có thể đăng dịch vụ với mô tả, giá, phương thức tính giá, thời gian thực hiện, số lần chỉnh sửa và điều kiện bàn giao. Creative có trách nhiệm bảo đảm thông tin dịch vụ phản ánh đúng khả năng cung cấp thực tế.',
        'Khi Khách hàng đặt thuê một dịch vụ, các thông tin được xác nhận trong đơn hàng, hợp đồng hoặc workspace công việc sẽ là căn cứ quan trọng để xác định phạm vi thực hiện giữa các bên.',
      ]),
      section('Hợp đồng và xác nhận thuê', [
        'Digital Creative có thể cung cấp công cụ tạo, lưu trữ hoặc xác nhận hợp đồng/thỏa thuận điện tử liên quan đến dự án hoặc dịch vụ. Các bên có trách nhiệm kiểm tra kỹ nội dung về phạm vi công việc, giá trị, tiến độ, bàn giao, chỉnh sửa, quyền sở hữu trí tuệ, hủy bỏ và các điều khoản khác trước khi xác nhận.',
        'Việc Nền tảng cung cấp mẫu hoặc công cụ hợp đồng không thay thế tư vấn pháp lý riêng cho từng giao dịch. Các bên có thể cần thỏa thuận bổ sung nếu tính chất dự án yêu cầu.',
      ]),
      section('Thanh toán, số dư và giữ tiền', [
        'Digital Creative có thể tích hợp với nhà cung cấp dịch vụ thanh toán bên thứ ba để hỗ trợ nạp tiền, thanh toán, hoàn tiền hoặc chuyển tiền theo quy trình của Nền tảng. Cơ chế cụ thể phải được hiển thị cho người dùng trước khi giao dịch.',
        'Đối với giao dịch yêu cầu bảo đảm thanh toán, Nền tảng có thể ghi nhận hoặc giữ trạng thái số tiền dành cho đơn hàng/dự án cho đến khi đáp ứng điều kiện giải ngân, hoàn tiền hoặc xử lý tranh chấp theo quy trình áp dụng. Digital Creative không được hiểu là ngân hàng, tổ chức tín dụng hoặc ví điện tử được cấp phép, trừ khi đơn vị vận hành thực tế có giấy phép tương ứng.',
      ], [
        'Người dùng phải kiểm tra số tiền, nội dung và người nhận trước khi xác nhận giao dịch.',
        'Phí nền tảng, phí thanh toán hoặc các khoản khấu trừ khác, nếu có, phải được thông báo theo chính sách hiện hành.',
        'Digital Creative có thể tạm giữ xử lý giao dịch khi có dấu hiệu gian lận, sai lệch, tranh chấp hoặc yêu cầu từ cơ quan có thẩm quyền.',
      ]),
      section('Hoàn tiền, hủy và tranh chấp', [
        'Việc hủy dự án/dịch vụ và hoàn tiền phụ thuộc vào trạng thái công việc, nội dung đã bàn giao, thỏa thuận giữa các bên và chính sách được công bố tại thời điểm giao dịch.',
        'Khi phát sinh tranh chấp, các bên nên cung cấp bằng chứng như nội dung trao đổi, hợp đồng, tệp bàn giao, lịch sử trạng thái và chứng từ giao dịch. Digital Creative có thể hỗ trợ tiếp nhận và xử lý theo quy trình nội bộ nhưng không mặc nhiên thay thế cơ quan tài phán có thẩm quyền.',
      ]),
      section('Đánh giá và phản hồi', [
        'Sau khi giao dịch đủ điều kiện hoàn thành, người dùng có thể đánh giá, chấm điểm hoặc phản hồi. Nội dung đánh giá phải dựa trên trải nghiệm thực tế, không được xúc phạm, vu khống, giả mạo, thao túng điểm số hoặc đổi lợi ích để tạo đánh giá sai lệch.',
        'Nếu Creative ứng tuyển bằng một dịch vụ cụ thể, Nền tảng có thể liên kết đánh giá của giao dịch với dịch vụ đó theo thiết kế nghiệp vụ được công bố.',
      ]),
      section('Nội dung người dùng', [
        'Người dùng giữ các quyền hợp pháp đối với nội dung do mình tạo và tải lên, nhưng cấp cho Digital Creative quyền cần thiết, không độc quyền, trong phạm vi hợp lý để lưu trữ, xử lý, hiển thị, truyền tải và vận hành nội dung nhằm cung cấp chức năng của Nền tảng.',
      ], [
        'Không đăng nội dung vi phạm pháp luật, quyền riêng tư, bản quyền, nhãn hiệu hoặc quyền của bên thứ ba.',
        'Không đăng mã độc, nội dung nhằm phá hoại hệ thống hoặc hướng dẫn lạm dụng Nền tảng.',
        'Không giả mạo cá nhân, doanh nghiệp, thương hiệu hoặc thành tích nghề nghiệp.',
      ], { afterBullets: ['Digital Creative có thể ẩn, hạn chế hoặc gỡ nội dung khi có căn cứ hợp lý cho rằng nội dung vi phạm Điều khoản, chính sách hoặc pháp luật.'] }),
      section('Quyền sở hữu trí tuệ', [
        'Tên, logo, giao diện, phần mềm, tài liệu và các tài sản thuộc Digital Creative hoặc đơn vị cấp phép được bảo vệ theo pháp luật sở hữu trí tuệ. Người dùng không được sao chép, phân phối, dịch ngược, khai thác hoặc sử dụng trái phép các tài sản này.',
        'Quyền sở hữu đối với sản phẩm sáng tạo được bàn giao giữa Creative và Khách hàng được xác định theo hợp đồng hoặc thỏa thuận của giao dịch. Nếu không có thỏa thuận rõ ràng, các bên cần tự xác lập quyền sử dụng, phạm vi chuyển giao và quyền tác giả/quyền liên quan theo pháp luật áp dụng.',
      ]),
      section('Liên kết TikTok, Facebook, YouTube và dịch vụ bên thứ ba', [
        'Digital Creative có thể cho phép người dùng chủ động liên kết tài khoản trên các nền tảng bên thứ ba như TikTok, Facebook/Meta và YouTube/Google nhằm xác minh hồ sơ hoặc hiển thị các thông tin, số liệu mà người dùng đã cho phép.',
        'Việc liên kết được thực hiện thông qua cơ chế ủy quyền chính thức (ví dụ OAuth) của nhà cung cấp tương ứng. Digital Creative không yêu cầu người dùng cung cấp mật khẩu TikTok, Facebook hoặc Google/YouTube trực tiếp cho Digital Creative.',
        'Tùy quyền người dùng cấp và khả năng API tại từng thời điểm, dữ liệu có thể bao gồm định danh tài khoản, tên hiển thị, username, ảnh đại diện, liên kết hồ sơ và một số thống kê như người theo dõi, lượt thích, số video, người đăng ký hoặc lượt xem. Không phải mọi loại dữ liệu đều khả dụng trên mọi nền tảng.',
      ], [
        'Người dùng có thể từ chối cấp quyền hoặc ngắt liên kết theo chức năng được cung cấp.',
        'Sau khi ngắt liên kết, Digital Creative sẽ ngừng đồng bộ dữ liệu mới và xử lý thông tin xác thực theo chính sách quyền riêng tư.',
        'Việc sử dụng dịch vụ bên thứ ba còn chịu điều khoản và chính sách riêng của nhà cung cấp đó.',
      ], { afterBullets: ['Digital Creative không kiểm soát việc nền tảng bên thứ ba thay đổi API, scope, giới hạn truy cập, chính sách hoặc ngừng cung cấp tính năng. Một số thông tin có thể tạm thời không cập nhật hoặc không còn khả dụng vì những thay đổi này.'] }),
      section('Hành vi bị cấm', [], [
        'Lừa đảo, chiếm đoạt tài sản, tạo giao dịch giả hoặc thao túng hệ thống thanh toán/đánh giá.',
        'Sử dụng bot, scraper hoặc phương thức tự động trái phép để thu thập dữ liệu hoặc gây tải bất thường.',
        'Tấn công, dò quét, vượt qua biện pháp bảo mật hoặc truy cập tài khoản/dữ liệu không được phép.',
        'Rửa tiền, tài trợ hoạt động bất hợp pháp hoặc sử dụng Nền tảng cho hàng hóa/dịch vụ bị cấm.',
        'Spam, quấy rối, đe dọa, phân biệt đối xử hoặc phát tán nội dung trái pháp luật.',
        'Lách phí, lợi dụng lỗi hệ thống hoặc cấu kết nhằm gây thiệt hại cho người dùng hay Nền tảng.',
      ]),
      section('Bảo mật và quyền riêng tư', [
        'Việc xử lý dữ liệu cá nhân được mô tả chi tiết tại Chính sách quyền riêng tư của Digital Creative. Người dùng nên đọc chính sách này trước khi đăng ký tài khoản hoặc liên kết dịch vụ bên thứ ba.',
        'Digital Creative áp dụng các biện pháp kỹ thuật và tổ chức phù hợp nhằm bảo vệ hệ thống và dữ liệu, nhưng không thể cam kết rằng mọi rủi ro an ninh mạng đều có thể được loại bỏ tuyệt đối.',
      ]),
      section('Tạm ngưng, hạn chế và chấm dứt tài khoản', [
        'Digital Creative có thể cảnh báo, hạn chế tính năng, tạm ngưng hoặc chấm dứt tài khoản khi có căn cứ hợp lý về hành vi vi phạm Điều khoản, gây nguy hiểm cho người dùng/hệ thống, gian lận, yêu cầu pháp lý hoặc các trường hợp cần thiết để bảo vệ Nền tảng.',
        'Trong phạm vi phù hợp, Nền tảng có thể thông báo lý do và cung cấp cơ chế khiếu nại. Việc chấm dứt tài khoản không làm mất các nghĩa vụ thanh toán, bồi thường, bảo mật hoặc nghĩa vụ khác đã phát sinh trước thời điểm chấm dứt.',
      ]),
      section('Dịch vụ bên thứ ba', [
        'Nền tảng có thể tích hợp dịch vụ thanh toán, lưu trữ, xác thực, phân tích hoặc mạng xã hội của bên thứ ba. Digital Creative không chịu trách nhiệm cho sự cố hoàn toàn nằm ngoài khả năng kiểm soát hợp lý của mình, nhưng sẽ nỗ lực phối hợp xử lý khi sự cố ảnh hưởng đến chức năng của Nền tảng.',
      ]),
      section('Giới hạn trách nhiệm', [
        'Trong phạm vi pháp luật cho phép, Digital Creative cung cấp nền tảng công nghệ hỗ trợ kết nối và quản lý giao dịch, không bảo đảm rằng mọi Creative, Khách hàng, dự án, dịch vụ hoặc nội dung do người dùng cung cấp đều đáp ứng kỳ vọng của bên còn lại.',
        'Không điều khoản nào trong tài liệu này nhằm loại trừ hoặc hạn chế trách nhiệm mà pháp luật bắt buộc không được loại trừ hoặc hạn chế.',
      ]),
      section('Bồi thường do vi phạm', [
        'Người dùng có trách nhiệm đối với thiệt hại phát sinh từ hành vi vi phạm pháp luật, vi phạm quyền của bên thứ ba hoặc vi phạm Điều khoản của mình, trong phạm vi được pháp luật cho phép và trên cơ sở lỗi, quan hệ nhân quả và thiệt hại thực tế.',
      ]),
      section('Thay đổi Điều khoản', [
        'Digital Creative có thể cập nhật Điều khoản để phản ánh thay đổi về tính năng, mô hình vận hành, yêu cầu pháp luật hoặc chính sách của bên thứ ba. Phiên bản mới sẽ được công bố kèm ngày cập nhật. Khi thay đổi có ảnh hưởng đáng kể đến quyền và nghĩa vụ của người dùng, Nền tảng sẽ áp dụng hình thức thông báo phù hợp.',
      ]),
      section('Luật áp dụng và giải quyết tranh chấp', [
        'Điều khoản này được giải thích và áp dụng phù hợp với pháp luật Việt Nam, trừ trường hợp quy định pháp luật bắt buộc khác được áp dụng. Các bên ưu tiên giải quyết tranh chấp bằng thương lượng và hòa giải. Nếu không thể giải quyết, tranh chấp có thể được đưa đến cơ quan có thẩm quyền theo quy định pháp luật.',
      ]),
      section('Thông tin liên hệ', ['Các thông tin dưới đây phải được hoàn thiện trước khi công bố chính thức:'], [], { contact: true }),
    ],
  },

  privacy: {
    eyebrow: 'Quyền riêng tư · Digital Creative',
    title: 'Chính sách quyền riêng tư',
    description: 'Cách Digital Creative thu thập, sử dụng, lưu trữ, bảo vệ và xử lý dữ liệu của người dùng.',
    version: '1.0',
    updated: '21/08/2026',
    notice: 'Đây là mẫu chính sách để triển khai cho Digital Creative. Trước khi công bố chính thức, cần điền đầy đủ thông tin pháp nhân, website, email, địa chỉ và đối chiếu với dữ liệu thực tế hệ thống thu thập/xử lý.',
    contactDetails: [
      { label: 'Đơn vị vận hành', value: '[BỔ SUNG TÊN PHÁP NHÂN]' },
      { label: 'Website', value: '[BỔ SUNG WEBSITE]' },
      { label: 'Email hỗ trợ/quyền riêng tư', value: '[BỔ SUNG EMAIL]' },
      { label: 'Địa chỉ', value: '[BỔ SUNG ĐỊA CHỈ]' },
    ],
    sections: [
      section('Phạm vi và mục đích', [
        'Chính sách này mô tả cách Digital Creative thu thập, sử dụng, lưu trữ, bảo vệ và xử lý dữ liệu khi người dùng truy cập website, ứng dụng và các dịch vụ liên quan.',
        'Digital Creative là nền tảng kết nối Creative, freelancer, KOL/KOC, nhà sáng tạo nội dung với khách hàng, thương hiệu và doanh nghiệp. Việc xử lý dữ liệu được thực hiện để cung cấp các chức năng của nền tảng, bảo vệ người dùng và đáp ứng nghĩa vụ pháp lý áp dụng.',
      ]),
      section('Dữ liệu tài khoản và hồ sơ', [
        'Digital Creative có thể xử lý các dữ liệu do người dùng cung cấp hoặc phát sinh trong quá trình sử dụng dịch vụ, tùy theo chức năng thực tế.',
      ], [
        'Email, tên hiển thị và ảnh đại diện.',
        'Thông tin hồ sơ nghề nghiệp, kỹ năng, nghề nghiệp, giới thiệu và portfolio.',
        'Dịch vụ, kinh nghiệm, mức giá và nội dung do người dùng tự đăng.',
        'Thông tin xác minh hoặc cài đặt tài khoản nếu chức năng tương ứng được sử dụng.',
      ]),
      section('Dữ liệu dự án, dịch vụ và giao dịch', [
        'Hệ thống có thể xử lý thông tin dự án, ứng tuyển, đề xuất, dịch vụ, đơn hàng, hợp đồng, trạng thái thực hiện, đánh giá, trao đổi và dữ liệu giao dịch cần thiết để vận hành marketplace.',
        'Đối với thanh toán, Digital Creative có thể nhận thông tin trạng thái giao dịch và dữ liệu cần thiết từ nhà cung cấp thanh toán. Nền tảng không nên lưu dữ liệu thẻ hoặc thông tin thanh toán nhạy cảm vượt quá nhu cầu và khả năng được nhà cung cấp cho phép.',
      ]),
      section('Dữ liệu kỹ thuật và bảo mật', [
        'Trong quá trình sử dụng, hệ thống có thể ghi nhận dữ liệu kỹ thuật như địa chỉ IP, loại thiết bị, phiên bản ứng dụng, thời điểm truy cập, nhật ký hệ thống, thông tin phiên đăng nhập và sự kiện bảo mật trong phạm vi cần thiết cho vận hành, chẩn đoán lỗi và chống gian lận.',
      ]),
      section('Liên kết tài khoản mạng xã hội', [
        'Digital Creative cho phép người dùng chủ động liên kết tài khoản mạng xã hội để xác minh hồ sơ và hiển thị các thông tin mà người dùng đã cho phép. Việc liên kết sử dụng cơ chế ủy quyền chính thức của nhà cung cấp, chẳng hạn OAuth.',
        'Digital Creative không yêu cầu người dùng nhập mật khẩu TikTok, Facebook hoặc Google/YouTube trực tiếp vào Digital Creative. Người dùng đăng nhập và cấp quyền trên giao diện do nhà cung cấp tương ứng kiểm soát.',
      ], [], {
        subsections: [
          section('Dữ liệu TikTok', [
            'Khi người dùng chọn “Liên kết TikTok”, Digital Creative có thể yêu cầu các quyền cần thiết thông qua TikTok Login/API. Dữ liệu thực tế được truy cập phụ thuộc vào quyền người dùng cấp, quyền ứng dụng được TikTok phê duyệt và khả năng API tại thời điểm sử dụng.',
          ], [
            'Định danh tài khoản TikTok do API cung cấp.',
            'Tên hiển thị, username, ảnh đại diện và liên kết hồ sơ nếu được phép.',
            'Số người theo dõi và số tài khoản đang theo dõi nếu được phép.',
            'Tổng lượt thích và số video nếu được phép.',
            'Thông tin trạng thái kết nối và thời điểm đồng bộ.',
          ], { afterBullets: ['Digital Creative không thu thập dữ liệu TikTok bằng cách yêu cầu mật khẩu của người dùng và không giả định rằng mọi trường dữ liệu luôn khả dụng.'] }),
          section('Dữ liệu Facebook / Meta', [
            'Khi người dùng liên kết Facebook, Digital Creative sử dụng cơ chế ủy quyền/API chính thức của Meta. Dữ liệu có thể khác nhau giữa tài khoản Facebook cá nhân và Facebook Page. Digital Creative chỉ truy cập dữ liệu tương ứng với quyền đã được người dùng cấp và quyền ứng dụng được Meta cho phép.',
            'Nếu tính năng hỗ trợ Facebook Page, người dùng có thể được yêu cầu chọn Page mà họ có quyền quản lý. Digital Creative không tuyên bố có khả năng truy cập số người theo dõi hoặc insight của mọi hồ sơ Facebook cá nhân.',
          ]),
          section('Dữ liệu Google / YouTube', [
            'Khi người dùng liên kết Google/YouTube, Digital Creative có thể sử dụng Google OAuth và YouTube API để lấy thông tin kênh được người dùng cho phép, chẳng hạn Channel ID, tên kênh, ảnh đại diện, số người đăng ký, lượt xem hoặc số video khi API cung cấp.',
            'Nếu một thống kê bị ẩn hoặc API không cung cấp, Digital Creative không tự suy đoán hoặc trình bày giá trị đó như dữ liệu đã xác minh.',
          ]),
        ],
      }),
      section('OAuth token và thông tin xác thực', [
        'Để duy trì kết nối với dịch vụ bên thứ ba, Digital Creative có thể xử lý access token, refresh token hoặc thông tin xác thực ủy quyền tương đương theo cơ chế của nhà cung cấp. Các thông tin này được sử dụng ở phía máy chủ và không được công khai trên hồ sơ người dùng.',
        'Digital Creative áp dụng biện pháp bảo vệ phù hợp đối với token và bí mật hệ thống, hạn chế quyền truy cập, không hiển thị token cho người dùng khác và không đưa Client Secret của nhà cung cấp vào ứng dụng mobile/public web.',
      ]),
      section('Mục đích sử dụng dữ liệu', [], [
        'Tạo và quản lý tài khoản.',
        'Cung cấp hồ sơ Creative, dự án, dịch vụ, ứng tuyển, hợp đồng và workspace.',
        'Xác minh và hiển thị thông tin mạng xã hội đã được người dùng cho phép.',
        'Đồng bộ thống kê mạng xã hội theo quyền được cấp.',
        'Xử lý và theo dõi giao dịch, hỗ trợ hoàn tiền hoặc tranh chấp khi có chức năng tương ứng.',
        'Gửi thông báo dịch vụ và hỗ trợ người dùng.',
        'Bảo mật tài khoản, phát hiện gian lận, ngăn chặn lạm dụng.',
        'Phân tích và cải thiện hiệu năng, độ ổn định và trải nghiệm của Nền tảng.',
        'Tuân thủ yêu cầu pháp luật và yêu cầu hợp lệ của cơ quan có thẩm quyền.',
      ]),
      section('Cơ sở và sự đồng ý của người dùng', [
        'Khi pháp luật hoặc nhà cung cấp dịch vụ yêu cầu sự đồng ý, Digital Creative chỉ xử lý dữ liệu trong phạm vi người dùng đã đồng ý hoặc theo cơ sở xử lý hợp pháp khác. Đối với liên kết mạng xã hội, người dùng có thể từ chối cấp quyền; khi đó một số chức năng liên quan sẽ không hoạt động.',
      ]),
      section('Hiển thị dữ liệu trên hồ sơ', [
        'Một số thông tin mà người dùng chủ động công khai, bao gồm thông tin hồ sơ nghề nghiệp và thống kê mạng xã hội đã liên kết, có thể được hiển thị cho người dùng khác nhằm hỗ trợ đánh giá Creative. Digital Creative không công khai access token, refresh token, Client Secret hoặc thông tin xác thực nội bộ.',
      ]),
      section('Chia sẻ và bên xử lý dữ liệu', [
        'Digital Creative có thể sử dụng nhà cung cấp hạ tầng, lưu trữ, gửi thông báo, phân tích, thanh toán, xác thực hoặc dịch vụ kỹ thuật khác để vận hành Nền tảng. Chỉ những dữ liệu cần thiết cho mục đích tương ứng nên được cung cấp và việc xử lý phải tuân theo thỏa thuận/chính sách áp dụng.',
        'Dữ liệu cũng có thể được cung cấp khi người dùng yêu cầu, khi cần thực hiện giao dịch, bảo vệ quyền và an toàn hợp pháp, hoặc khi cơ quan có thẩm quyền yêu cầu theo pháp luật.',
      ]),
      section('Không bán dữ liệu cá nhân', [
        'Digital Creative không bán dữ liệu cá nhân hoặc dữ liệu mạng xã hội của người dùng cho bên thứ ba, với điều kiện mô hình kinh doanh và hoạt động thực tế của đơn vị vận hành duy trì đúng cam kết này.',
      ]),
      section('Lưu trữ dữ liệu', [
        'Dữ liệu được lưu trong thời gian cần thiết để cung cấp dịch vụ, duy trì bảo mật, giải quyết tranh chấp, đáp ứng nghĩa vụ pháp lý hoặc mục đích hợp pháp khác. Thời gian lưu cụ thể có thể khác nhau theo loại dữ liệu và trạng thái tài khoản.',
        'Khi dữ liệu không còn cần thiết, Digital Creative có thể xóa, ẩn danh hoặc xử lý theo chính sách lưu trữ và yêu cầu pháp luật áp dụng.',
      ]),
      section('Ngắt liên kết mạng xã hội', [
        'Người dùng có thể ngắt liên kết tài khoản mạng xã hội từ chức năng quản lý tài khoản xã hội của Digital Creative khi tính năng này khả dụng.',
      ], [
        'Hệ thống ngừng đồng bộ dữ liệu mới từ tài khoản đã ngắt liên kết.',
        'Token liên quan được thu hồi, xóa hoặc vô hiệu hóa theo thiết kế và khả năng của nhà cung cấp.',
        'Dữ liệu đã lưu trước đó được xử lý theo chính sách lưu trữ, yêu cầu xóa dữ liệu và nghĩa vụ pháp lý áp dụng.',
        'Người dùng cũng có thể quản lý quyền ứng dụng trực tiếp tại nền tảng TikTok, Meta hoặc Google nếu nhà cung cấp hỗ trợ.',
      ]),
      section('Xóa tài khoản và yêu cầu xóa dữ liệu', [
        'Người dùng có thể sử dụng chức năng xóa tài khoản trong ứng dụng nếu Digital Creative đã cung cấp chức năng này, hoặc liên hệ kênh hỗ trợ chính thức để yêu cầu xử lý dữ liệu theo quyền áp dụng.',
        'Trước khi xóa, Digital Creative có thể cần xác minh danh tính/người yêu cầu và kiểm tra các nghĩa vụ còn tồn tại như giao dịch, tranh chấp, phòng chống gian lận hoặc yêu cầu lưu trữ bắt buộc.',
        'Trang chính sách công khai phải được cập nhật bằng quy trình xóa tài khoản thực tế của ứng dụng trước khi gửi xét duyệt production.',
      ]),
      section('Quyền của người dùng', [], [
        'Yêu cầu truy cập hoặc biết về dữ liệu của mình trong phạm vi pháp luật áp dụng.',
        'Cập nhật hoặc chỉnh sửa thông tin không chính xác.',
        'Rút lại sự đồng ý khi việc xử lý dựa trên sự đồng ý.',
        'Ngắt liên kết tài khoản mạng xã hội.',
        'Yêu cầu xóa hoặc hạn chế xử lý trong những trường hợp pháp luật cho phép.',
        'Khiếu nại hoặc liên hệ Digital Creative về việc xử lý dữ liệu.',
      ]),
      section('Bảo mật dữ liệu', [
        'Digital Creative áp dụng các biện pháp kỹ thuật và tổ chức phù hợp với tính chất hệ thống, có thể bao gồm kiểm soát truy cập, mã hóa dữ liệu nhạy cảm phù hợp, quản lý secret, ghi nhật ký bảo mật, xác thực và các biện pháp giảm thiểu truy cập trái phép.',
        'Không hệ thống điện tử nào có thể bảo đảm an toàn tuyệt đối. Khi phát hiện sự cố ảnh hưởng đến dữ liệu, Digital Creative sẽ xử lý và thực hiện các nghĩa vụ thông báo theo quy định áp dụng.',
      ]),
      section('Dữ liệu trẻ em và giới hạn độ tuổi', [
        'Digital Creative không chủ đích thu thập dữ liệu của người không đáp ứng độ tuổi tối thiểu theo pháp luật và chính sách áp dụng. Khi liên kết dịch vụ bên thứ ba, người dùng cũng phải đáp ứng điều kiện độ tuổi của TikTok, Meta, Google/YouTube hoặc nhà cung cấp tương ứng.',
      ]),
      section('Chuyển dữ liệu và hạ tầng', [
        'Tùy nhà cung cấp hạ tầng và dịch vụ kỹ thuật, dữ liệu có thể được xử lý trên hệ thống đặt tại các khu vực pháp lý khác nhau. Digital Creative sẽ xem xét các yêu cầu pháp luật áp dụng đối với việc chuyển và bảo vệ dữ liệu.',
      ]),
      section('Cookie và công nghệ tương tự', [
        'Website Digital Creative có thể sử dụng cookie hoặc công nghệ tương tự cho đăng nhập, bảo mật, tùy chọn người dùng và phân tích nếu các chức năng này được triển khai. Chính sách cookie/consent phải phản ánh đúng công nghệ thực tế được sử dụng.',
      ]),
      section('Liên kết tới dịch vụ bên thứ ba', [
        'Nền tảng có thể chứa liên kết hoặc tích hợp với TikTok, Meta, Google/YouTube, nhà cung cấp thanh toán hoặc dịch vụ khác. Các dịch vụ này có chính sách quyền riêng tư riêng và Digital Creative không kiểm soát toàn bộ hoạt động xử lý dữ liệu của họ.',
      ]),
      section('Thay đổi Chính sách quyền riêng tư', [
        'Digital Creative có thể cập nhật Chính sách này khi thay đổi tính năng, nhà cung cấp, mục đích xử lý hoặc yêu cầu pháp luật. Phiên bản mới sẽ được công bố cùng ngày cập nhật. Đối với thay đổi quan trọng, Digital Creative sẽ áp dụng hình thức thông báo phù hợp.',
      ]),
      section('Thông tin liên hệ', ['Hoàn thiện các thông tin sau trước khi công bố chính thức:'], [], { contact: true }),
    ],
  },
};
