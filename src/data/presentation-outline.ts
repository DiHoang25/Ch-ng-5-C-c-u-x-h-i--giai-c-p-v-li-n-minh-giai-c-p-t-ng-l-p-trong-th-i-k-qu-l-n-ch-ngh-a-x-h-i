export interface PresentationPoint {
  title: string;
  body: string;
}

export interface SpeakerSegment {
  id: string;
  duration: string;
  focus: string;
  lead: string;
  points: PresentationPoint[];
}

export const speakerSegments: SpeakerSegment[] = [
  {
    id: "speaker-1",
    duration: "",
    focus: "Phân tích tư tưởng gốc của Lênin",
    lead:
      "",
    points: [
      {
        title: "Bối cảnh lịch sử cụ thể",
        body:
          "Ở nước Nga đầu thế kỷ XX, công nhân là lực lượng tiên phong về tổ chức và ý thức chính trị, nhưng nông dân mới là bộ phận đông đảo nhất. Vì thế, liên minh công - nông là lời giải lịch sử cho bài toán tạo sức mạnh xã hội đủ lớn để giành và giữ chính quyền."
      },
      {
        title: "Ý nghĩa chính trị",
        body:
          "Liên minh công - nông tạo nền tảng xã hội rộng cho chính quyền mới. Nếu chỉ dựa vào một lực lượng nhỏ, chính quyền dễ bị cô lập và khó duy trì ổn định lâu dài."
      },
      {
        title: "Ý nghĩa kinh tế",
        body:
          "Công nhân cần nông dân để bảo đảm lương thực; nông dân cần công nhân để có máy móc và tổ chức sản xuất. Do đó, đây vừa là liên minh chính trị vừa là liên minh kinh tế."
      },
      {
        title: "Kết luận cần nhấn mạnh",
        body:
          "Giá trị cốt lõi của tư tưởng Lênin nằm ở phương pháp tập hợp lực lượng phù hợp với mục tiêu lịch sử cụ thể, không phải sao chép mô hình cứng nhắc cho mọi thời đại."
      }
    ]
  },
  {
    id: "speaker-2",
    duration: "",
    focus: "Đối chiếu thực tiễn Việt Nam hiện nay",
    lead:
      "",
    points: [
      {
        title: "Xã hội đa tầng",
        body:
          "Việt Nam hiện nay không còn cấu trúc hai lực lượng đơn giản. Bên cạnh công nhân và nông dân, còn có trí thức, doanh nhân, thanh niên, phụ nữ và lao động số; lợi ích xã hội vì thế đa dạng và đan xen hơn."
      },
      {
        title: "Vai trò của trí thức",
        body:
          "Trí thức là lực lượng sản xuất tri thức, công nghệ và đổi mới sáng tạo. Đây là bộ phận quan trọng để nâng cấp mô hình tăng trưởng và năng lực cạnh tranh quốc gia."
      },
      {
        title: "Vai trò của doanh nhân và lực lượng trẻ",
        body:
          "Doanh nhân tổ chức nguồn lực, vốn và thị trường; thanh niên, lao động trẻ tiếp thu nhanh công nghệ mới. Hai lực lượng này tạo động lực tăng trưởng và chuyển đổi trong kỷ nguyên số."
      },
      {
        title: "Kết luận cần chốt",
        body:
          "Liên minh hiện nay không phải là ghép thêm thành phần cho đủ, mà là cơ chế phối hợp lợi ích giữa các lực lượng xã hội để cùng hướng tới phát triển nhanh, bền vững, bao trùm và tự chủ."
      }
    ]
  },
  {
    id: "speaker-3",
    duration: "",
    focus: "Nhận định của nhóm và vai trò sinh viên",
    lead:
      "",
    points: [
      {
        title: "Quan điểm của nhóm",
        body:
          "Điều còn nguyên giá trị là tinh thần đoàn kết lực lượng vì mục tiêu chung. Điều cần đổi mới là thành phần liên minh, thứ tự ưu tiên mục tiêu và cơ chế phối hợp lợi ích trong bối cảnh mới."
      },
      {
        title: "Phương hướng cơ bản",
        body:
          "Thứ nhất: Phải đẩy mạnh công nghiệp hóa, nhưng phải gắn liền với kinh tế tri thức và chuyển đổi số. Đây là xu hướng tất yếu. Thứ hai: Cần một môi trường công bằng thông qua việc hoàn thiện thể chế kinh tế thị trường. Có như vậy, các giai cấp như doanh nhân hay trí thức mới phát huy hết khả năng của mình. Thứ ba: Phát triển kinh tế nhưng không được quên con người. Phải đảm bảo hài hòa lợi ích và thực hiện tốt an sinh xã hội."
      },
      {
        title: "Vai trò sinh viên sắp đi làm",
        body:
          "Sinh viên là lực lượng lao động sáng tạo, là cầu nối tri thức giữa giảng đường và thực tiễn sản xuất, đồng thời là công dân có trách nhiệm trong việc xây dựng đồng thuận xã hội và kỷ cương nghề nghiệp."
      },
      {
        title: "Kết Luận",
        body:
          "Một tư tưởng mạnh không cũ đi; nó được làm mới để phù hợp thời đại. Với Việt Nam hiện nay, cách phù hợp là giữ nguyên lý đoàn kết lực lượng và vận dụng sáng tạo theo điều kiện lịch sử mới."
      }
    ]
  }
];
