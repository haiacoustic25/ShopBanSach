-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 11, 2022 lúc 12:31 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlsach`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_04_15_012109_create_tb_authors_table', 1),
(6, '2022_04_15_030706_create_tb_categories_table', 1),
(7, '2022_04_15_041012_create_tb_books_table', 1),
(8, '2022_04_15_221132_create_tb_carts_table', 1),
(9, '2022_04_15_224734_create_tb_detail_carts_table', 1),
(10, '2022_06_10_085219_create_tb_bills_table', 1),
(11, '2022_06_10_085250_create_tb_detail_bills_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'admin_Token', '06142e30cbc5f58ccb0e8391d2d373e61ed283e0e4581df0713de27f47ea99dc', '[\"*\"]', NULL, '2022-06-11 03:28:32', '2022-06-11 03:28:32'),
(2, 'App\\Models\\User', 2, 'user_Token', '5f8bf01e76818c3c2b4ca67bd94268f21b8b83205ab1b2ea15e4fe8214767cfb', '[\"*\"]', NULL, '2022-06-11 03:28:43', '2022-06-11 03:28:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_authors`
--

CREATE TABLE `tb_authors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tg_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tg_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `tg_dob` datetime NOT NULL,
  `tg_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'test.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tb_authors`
--

INSERT INTO `tb_authors` (`id`, `tg_name`, `tg_description`, `tg_dob`, `tg_image`, `created_at`, `updated_at`) VALUES
(1, 'Hồ Anh Thái', 'Hồ Anh Thái có lẽ là một trong những tác giả có sức viết dồi dào nhất nền văn học đương đại Việt Nam với tổng cộng 33 cuốn sách. “Hiện tượng văn chương của thế hệ văn nhân thời hậu chiến sau 1975” Hồ Anh Thái bắt đầu sự nghiệp viết lách từ năm 1985, bên cạnh một sự nghiệp khác là nhà ngoại giao và giáo sư văn hóa', '1960-01-01 00:00:00', '1653316221-author.jpg', '2022-05-22 03:30:21', '2022-05-22 03:30:21'),
(2, 'Nguyễn Vinh Nguyên', 'Nhà văn người Pháp Patrick Modiano, chủ nhân của giải Nobel Văn chương 2014 là một trong những tác giả gợi nhiều cảm hứng tới Nguyễn Vĩnh Nguyên, cùng với Italo Calvino của tác phẩm “Những thành phố vô hình”. Patrick Modiano thường viết về Paris, còn Nguyễn Vĩnh Nguyên, anh có một hoài cảm mãnh liệt với Đà Lạt nói riêng và những đô thị buồn nói chung. Những tác phẩm của Nguyễn Vĩnh Nguyên, dù là tản văn như “Với Đà Lạt ai cũng là lữ khách” hay khảo cứu “Đà Lạt một thời hương xa”, “Đà Lạt bên dưới sương mù” hay cuốn tiểu thuyết “Kí ức của kí ức”… đều mang máng chất hoài niệm với những tầng kí ức sâu thẳm và những nét văn hóa rất đẹp gắn với thành phố tác giả rất gắn bó.', '1979-05-24 00:00:00', '1653316270-author.jpg', '2022-05-22 03:31:10', '2022-05-22 03:31:10'),
(3, 'Nguyễn Trương Quý', 'Dấu ấn của Hà Nội ghi đậm trong những cuốn sách của nhà văn Nguyễn Trương Quý như“Tự nhiên người Hà Nội”, “Ăn phở rất khó thấy ngon”, “Hà Nội là Hà Nội”, “Xe máy tiếu ngạo”, “Còn ai hát về Hà Nội”, “Dưới cột đèn rót một ấm trà”, “Mỗi góc phố một người đang sống”. Nguyễn Trương Quý viết về Hà Nội trong nếp sống, nếp nghĩ, những thói quen, những góc đường, những món ăn… như thể đang thủ thỉ chuyện trò cho những vị khách phương xa đến. Nguyễn Trương Quý nói anh đã dành rất nhiều thời gian để quan sát thành phố, quan sát từng chuyển động đơn lẻ và những biến đổi lớn lao lên không gian, thời gian và con người Hà Nội. Cái nhìn tinh tế ấy được tác giả thuật lại bằng giọng văn đơn giản, lúc hoài niệm, khi mỉa mai, lúc vui tươi sống động, khi chiêm nghiệm bâng khuâng', '1977-11-13 00:00:00', '1653316322-author.jpg', '2022-05-22 03:32:02', '2022-05-22 03:32:02'),
(4, 'Đỗ Bích Thủy', 'Dù là người Kinh, nhưng Đỗ Bích Thúy hiểu và viết về Hà Giang, người Mông và tất cả những gì bí ẩn của những dân tộc vùng cao phía Bắc đẹp và thuyết phục đến độ nhiều người nghĩ Đỗ Bích Thúy là một nhà văn Mông.', '1975-11-13 00:00:00', '1653316359-author.jpg', '2022-05-22 03:32:39', '2022-05-22 03:32:39'),
(5, 'Nguyễn Mai Chi', 'Mai Chi là một tác giả trẻ, được biết đến từ những dòng viết trên trang blog cá nhân “Life through her fisheye lens” trước khi viết cuốn tản văn đầu tay “5 múi giờ, 10 tiếng bay và một cái khép mi”, rồi đến tuyển tập truyện ngắn “Hapocrates và bông hồng phía trên thành phố”. Mai Chi là một người kể chuyện có hồn, nhạy cảm và riêng tư, vì thế những trang viết của cô gắn với rất nhiều những hỉ, nộ, ái, ố mà chính những người trẻ như cô đang trải qua từng ngày. Mai Chi và những cuốn sách của cô có lẽ chính là “phương thức văn chương” hợp lý nhất để tiếp cận đời sống tinh thần của thế hệ millennial: bằng âm nhạc, phim ảnh, những chuyến đi, những yêu đương, bằng khoảng cách thế hệ trong gia đình, bằng cuộc sống ở một xứ sở khác… Cuốn sách mới nhất của Mai Chi cũng là một tập tản văn “Thế giới qua đôi mắt cá của cô ấy.”', '1978-07-02 00:00:00', 'test.jpg', '2022-05-22 03:33:23', '2022-05-22 03:33:23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_bills`
--

CREATE TABLE `tb_bills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `bill_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bill_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bill_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_books`
--

CREATE TABLE `tb_books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `s_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `s_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `s_price` decimal(10,0) NOT NULL,
  `s_newPrice` decimal(10,0) NOT NULL,
  `s_nsx` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `s_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'test.jpg',
  `s_amount` int(11) NOT NULL,
  `s_status` int(11) NOT NULL,
  `s_discount` int(11) NOT NULL,
  `author_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tb_books`
--

INSERT INTO `tb_books` (`id`, `s_name`, `s_description`, `s_price`, `s_newPrice`, `s_nsx`, `s_image`, `s_amount`, `s_status`, `s_discount`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES
(2, 'Cõi người rung chuông tận thế', 'Cõi người rung chuông tận thế được tác giả Hồ Anh Thái viết từ 1996, in lần đầu vào 2002, sau đó tái bản nhiều lần tại Việt Nam; năm 2012 Nhà xuất bản Đại học Tổng hợp Texas - Mỹ ấn hành, cả bản bìa cứng và bản điện tử với nhan đề Apocalypse Hotel - Khách sạn ngày tận thế.\r\n\r\nCuốn tiểu thuyết mở đầu bằng một cái chết kỳ lạ ở một bờ biển đẹp. Và tiếp đó là dồn dập những sự kiện hấp dẫn nghẹt thở như truyện trinh thám hình sự. Nhưng nó xuất sắc và có sức sống trong lòng bạn đọc, trong đánh giá của giới chuyên môn ở tầm vóc xã hội của vấn đề: cái xấu, và cái ác sẽ bị trả giá thế nào. Mạch truyện liền tù tì những cái chết, sự trả thù, nhưng xen vào đó là ngôn ngữ người Việt hôm nay. Không lôi thôi lòng thòng. Chi tiết cô đặc và đắt. Nó ám ảnh ở dòng mở đầu như phũ phàng và tiếng thở dài nhẹ nhàng khi cô gái được giải khỏi lời nguyền oan nghiệt, trở lại là người bình thường được sống như người chung quanh cô khi kết sách. Vẫn là cách nghĩ của người Việt. Qua lửa qua máu qua nước... là cõi bình yên.”', '150000', '127500', 'Báo chí', '1654571949-book.png', 500, 1, 15, 1, 6, '2022-06-06 13:19:09', '2022-06-06 13:19:09'),
(3, 'Tiếng thở dài qua rừng kim tước', '“Tiếng thở dài qua rừng kim tước là một tác phẩm xuất sắc của Hồ Anh Thái. Ðây là câu chuyện về những đứa trẻ chưa kịp sống đã phải chết vì món hồi môn sau này bố mẹ chúng phải trả. Hồ Anh Thái đưa người đọc vào một không gian ghê rợn, đầy âm khí. Mỗi đứa trẻ chết được đánh dấu bằng một cây kim tước. Chẳng mấy chốc, một rừng kim tước đã mọc lên. Nhưng cuối cùng, một trận cuồng phong đã quật đổ rừng cây. Cơn cuồng phong ấy như được góp bằng hơi thở của những người đàn bà đang sống. Màu sắc siêu thực phủ đẫm thiên truyện.\r\n\r\nRừng kim tước oan nghiệt kia là một ẩn dụ nghệ thuật có sức biểu đạt lớn. Nó xoáy vào tâm trí người đọc một niềm nhức nhối: tại sao cái xã hội kia lại có thể thờ ơ đến thế trước số phận con người? “(Nguyễn Đăng Điệp, Tạp chí Nghiên cứu Văn học, 2012) Những câu chuyện về vẻ đẹp như thực như hư của Ấn Độ được viết với giọng văn đẹp, tha thiết nhưng vẫn đủ khái quát sâu sắc, người đọc có thể biết rõ về đất nước này qua mỗi chân dung “Người Ấn”, hay từng tập tục, cảnh trí…\r\n\r\nCuốn sách luôn được đánh giá cao trong sự nghiệp văn chương của Hồ Anh Thái ở trong và ngoài nước và ngay tại Ấn Độ từ khi ra đời cách nay gần 20 năm, cho đến nay.\r\n\r\nGiá sản phẩm đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '80000', '73600', 'Nhà xuất bản trẻ', '1654572062-book.png', 100, 1, 8, 1, 1, '2022-06-06 13:21:02', '2022-06-06 13:23:18'),
(4, 'Tự kể', 'Những mẩu ngăn ngắn, những câu chuyện kể rù rì, thủng thẳng, ghép lại như bức tranh liên hoàn, hay như cuốn phim thời sự hấp dẫn về thời chiến tranh, thời bao cấp nghèo khổ mà không thấy khổ. Tưởng là chỉ kể thế thôi, nhưng hiện lên cả một thời, cả một đời người, và bao nhiêu chuyện khác nữa đằng sau con chữ.\r\n\r\nTheo nhà văn Lê Minh Khuê sau khi đọc mấy mẩu rải rác này, nói, phải đi xa người ta mới viết được như thế, những chuyện của một thời vất vả này trở nên có nét lãng mạn. Cuộc sống đã từng như thế đấy.\r\n\r\nMột cuốn sách mang những kỷ niệm của một người thành kỷ niệm chung của nhiều người.\r\n\r\nGiá sản phẩm đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '92000', '87400', 'Nhà xuất bản trẻ', '1654572110-book.png', 200, 1, 5, 1, 6, '2022-06-06 13:21:50', '2022-06-06 13:23:11'),
(5, 'Đà Lạt một thời hương xa', 'Đà Lạt được kiến tạo từ những cuộc du hành văn hóa trong quá khứ. Đà Lạt từng là không gian văn hóa đô thị có sức hấp dẫn riêng, nơi gặp gỡ của những khát vọng tri thức lớn, điểm đến của những hành trình sáng tạo đầy lý tưởng. Tất cả đặc biệt cô đọng trong giai đoạn hai mươi năm mà tác giả cuốn sách này chọn khảo sát - một quá khứ gần - nhưng dường như đang đứng trước nguy cơ bị phủ lấp, xóa nhòa bởi bụi thời gian…\r\n\r\nNhân vật, sự kiện, hiện tượng văn hóa được phục dựng lại bằng ghi chép điền dã khảo cứu, kết nối tư liệu và những kiến giải riêng. Quá khứ được đồng hiện trên nền văn phongvừa bay bổng vừa giàu chiêm nghiệm, định hình một lối văn với Đà Lạt, của riêng Đà Lạt.\r\n\r\nVới cuốn du khảo này, Nguyễn Vĩnh Nguyên không còn là người lữ khách của vùng trời sương khói riêng tư nữa, mà là một nhà du hành, tri hành đường dài, dấn bước trong đơn độc về miền quá khứ với khát khao được chìm đắm vào tâm hồn của đô thị thời hoàng kim.\r\n\r\nMón quà dành cho những người yêu và thực lòng muốn hiểu giá trị Đà Lạt!\r\n\r\nGiá sản phẩm đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '85000', '80750', 'Nhà xuất bản trẻ', '1654572184-book.png', 100, 1, 5, 2, 1, '2022-06-06 13:23:04', '2022-06-06 13:23:04'),
(6, 'Ký ức của ký ức', 'Bằng một lối viết pha trộn biên khảo, hồi ức và các bản điều tra, một tiểu thuyết thấm đẫm hoài niệm về thành phố Đà Lạt đã được viết xuống.\r\n\r\nNhững ngõ hẻm quanh co, những khoảng đồi mù sương, những khúc quanh của biến thiên mất mát, những nhân dạng thoát ẩn thoắt hiện và cả những cuộc tình chóng vánh, vùi trong sương khói tịch mị đưa người đọc đi vào một Đà Lạt của hoang phế, u hoài. Thành phố của những cuộc đến và đi, kiếm tìm và trốn chạy.\r\n\r\nKý ức của ký ức là một tiểu thuyết tối giản, với sức hàm chứa sâu rộng, phong cách lịch duyệt và hướng nội. Được sinh ra để dành riêng cho Đà Lạt và người yêu Đà Lạt.\r\n\r\nGiá sản phẩm trên đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '100000', '97000', 'Nhà xuất bản phụ nữ', '1654572382-book.png', 50, 1, 3, 2, 4, '2022-06-06 13:26:22', '2022-06-06 13:26:22'),
(7, 'Đà lạt năm xưa', 'Nhìn từ phương diện lịch sử quy hoạch các đô thị Việt Nam, thì Đà\r\nLạt là một hiện tượng đô thị đặc biệt. Đó là một đô thị mang hình\r\nmẫu châu Âu trong lòng Việt Nam. Điều này thể hiện qua thiết kế hệ\r\nthống giao thông, hình thái kiến trúc, phân khu chức năng, triết lý bảo\r\ntồn cảnh trí tự nhiên và cuối cùng là lối sống cư dân… Đến nay, vẫn\r\ncòn nhiều khoảng trống để xây dựng một chân dung hoàn chỉnh của\r\nĐà Lạt.\r\nCuốn sách Đà Lạt năm xưa của Nguyễn Hữu Tranh, một người Đà\r\nLạt viết về thành phố của mình, bằng sự biên khảo tỉ mỉ, cẩn trọng, đã\r\nkết nối các tài liệu hơn một thế kỷ qua để như một nhà xây dựng, tạo\r\nnên một khuôn hình tương đối rõ nét về giai đoạn hình thành và phát\r\ntriển của Đà Lạt từ cuối TK 19 và nửa đầu TK 20. Sự gọn gàng, mạch\r\nlạc của cấu trúc cuốn sách trước hết là nhờ sự chọn lựa các tài liệu\r\nhấp dẫn, từ dạng hồi ký của các nhà khoa học, chính khách Pháp như\r\nGabrielle M. Vassal, Étienne Tardif hay bác sĩ Alexandre Yersin…,\r\nđến các bài vở trên các tờ báo Pháp thời Đông Dương đề cập đến các\r\nvấn đề đầu tư xây dựng Đà Lạt và nhất là các bản đồ, công trình dân\r\ntộc học, đồ án quy hoạch thành phố…\r\nCuốn sách được thực hiện từ đầu thập niên 1990, khi bóng hình Đà\r\nLạt cũ còn tương đối đậm nét và bối cảnh lưu trữ cũng như truy cập\r\ndữ liệu đòi hỏi nhiều nỗ lực và kỹ năng xử lý tài liệu, qua hai thập\r\nniên đã chứng tỏ giá trị của nó.\r\nNhững nỗ lực này của tác giả, một nhà nông học, đã khiến cho cuốn\r\nsách được giới nghiên cứu Đà Lạt tìm đọc, tham khảo như một cuốn\r\ncần thiết trong mọi danh mục tài liệu tham khảo. Sự hiểu biết chuyên\r\nmôn về thực vật của tác giả cũng khiến cho cuốn sách có hàm lượng\r\nthông tin tin cậy, cũng như hiểu được không gian cảnh sắc trước khi\r\nngười Pháp thiết lập đô thị theo hình mẫu phương Tây. Việc chỉ ra\r\nrằng nơi đây cũng từng có một nền tảng phong tục riêng rất ý nghĩa\r\ntrong việc duy trì sự phát triển bền vững của Đà Lạt, nhất là với\r\nngười đọc thế kỷ 21. Người giới thiệu bản thảo, nhà văn Nguyễn\r\nVĩnh Nguyên đã nhận định: “Những dữ liệu về môi trường từ cuốn\r\nsách này cũng là một nguồn khả tín giúp độc giả có thể so sánh với\r\nhiện tại khi điều kiện xã hội kéo theo triết lý quy hoạch thay đổi, Đà\r\nLạt đang đứng trước mối lo đánh mất ‘mã gien’ của mình.” Trên hết,\r\ncuốn sách chứa đựng tình yêu của một cư dân đối với thành phố\r\nxinh đẹp của mình.', '105000', '99750', 'Nhà xuất bản trẻ', '1654572442-book.png', 230, 1, 5, 3, 6, '2022-06-06 13:27:22', '2022-06-06 13:27:22'),
(8, 'Còn ai hát về Hà Nội', 'Tự nhiên như người Hà Nội, cuốn sách tiểu luận đầu tay của Nguyễn Trương Quý vốn được coi như một loại “hồ sơ kiến trúc” qua những quan sát về hình thái đô thị , cuốn thứ hai là thể loại tạp văn, Ăn phở rất khó thấy ngon, là chân dung về con người sống trong đô thị ấy, tập trung vào giới viên chức văn phòng với các thói tật và hành vi. Hà Nội là Hà Nội, cuốn thứ ba, là cuộc tìm kiếm những giá trị văn hóa mang những câu hỏi bao trùm hơn. Và cuốn gần đây hơn cả, Xe máy tiếu ngạo, là một cuộc khảo sát văn chương về phương tiện như xe máy của dân thành phố, cũng như ghi lại đậm nét thêm những hành vi và lối sống của người đô thị.\r\n\r\nGhi lại những gì quan sát và trải nghiệm về Hà Nội như một đối tượng cũng là sự đánh dấu các giai đoạn viết của Nguyễn Trương Quý, và nay, anh trở lại với Hà Nội ở góc quan sát khác: qua âm nhạc.\r\n\r\nCòn ai hát về Hà Nội là cuốn sách nhắc lại về âm nhạc, ca khúc, các nhạc sĩ , nhạc sư và các ca sĩ dành cho một thành phố đặc biệt, hiếm có thành phố nào trên đất nước ta có nhiều bài hát hay ghi dấu lịch sử, tình yêu và cuộc sống như Hà Nội. Tác giả đã kể lại một cách hệ thống không chỉ trong lĩnh vực âm nhạc, tinh tế trong quan sát, mạch lạc pha hài hước trong nhận xét, và vẫn với giọng từ tốn duyên dáng bởi những bất ngờ trong chi tiết, mang lại sự hấp dẫn bất ngờ cho người đọc nhiều lứa tuổi.\r\n\r\nCuốn sách tặng độc giả CD những ca khúc kinh điển về Hà Nội với những giọng ca vang bóng một thời và các phụ bản màu là những bìa bản nhạc đẹp cách đây hơn 60 năm', '110000', '104500', 'Nhà xuất bản trẻ', '1654572515-book.png', 230, 1, 5, 3, 4, '2022-06-06 13:28:35', '2022-06-06 13:28:35'),
(9, 'Hà nội bảo thế là thường', 'Ở Hà Nội, quán nước chè và quán bia hơi giống như một sự nối dài các không gian cộng đồng. Các địa điểm này tập trung tinh thần những giai thoại “người Bắc có lý luận”, khi người uống bia hơi và nhấp chén trà không say cồn mà say giành phần thắng trong tranh cãi. Cái dồn nén của những khát vọng không thành, những “Chí lớn chưa về bàn tay không”, tìm thấy chỗ xả ra, nhưng không đến độ nặng đô như rượu quốc lủi hay brandy. Chúng nhè nhẹ thôi, những tâm sự vặt đồng điệu với những thức quà vặt ấy.\r\n\r\nNguyễn Trương Quý từ lâu đã xác lập mình là nhà văn của Hà Nội, người say mê ghi lại những trầm tích quá vãng cả trong đời sống vật chất lẫn thế giới tinh thần. Những ghi chép đi vào các ngách hẹp quanh co nhỏ tưởng như mất hút nhưng sau cùng lại dẫn tới một bức tranh Hà Nội rộng lớn không chỉ theo chiều không gian mà cả chiều thời gian. Hà Nội bảo thế là thường cùng với nhiều cuốn sách khác của Nguyễn Trương Quý góp phần làm nên một định nghĩa về Hà Nội, cố định những giá trị, để Hà Nội dù trở nên hiện đại vẫn là một đô thị có hồn cốt riêng.', '91800', '87210', 'Nhà xuất bản hội nhà văn', '1654572565-book.png', 90, 1, 5, 3, 9, '2022-06-06 13:29:25', '2022-06-06 13:29:25'),
(10, 'Tự nhiên như người hà nội', 'Tự Nhiên Như Người Hà Nội là tựa đề cuốn sách đầu tiên trong bộ ba sách về Hà Nội của Nguyễn Trương Quý. Nếu Ăn phở Hà Nội rất khó thấy ngon phác hoạ nên chân dung con người thành phố với sự tập trung đặc biệt vào lối sống của giới viên chức văn phòng bằng ngòi bút dí dỏm và hài hước; hay Hà Nội là Hà Nội đem đến cho độc giả cái nhìn mới mẻ, độc đáo về thủ đô nghìn năm văn hiến thì Tự nhiên như người Hà Nội lại là những quan sát, tìm hiểu về hình thái đô thị, làm rõ đặc trưng không gian rất đặc biệt của Hà Nội.\r\n\r\nNgay từ trang bìa, ta đã bắt gặp một thiếu nữ \"tóc xoã vai mềm\" đạp xe trên con đường Hà Nội xanh mướt hàng cây với mặt hồ lung linh gợn sóng, Nhà thờ lớn cổ kính và cây cầu Long Biên lịch sử hay những mái ngói âm dương gợi niềm hoài cổ...\r\n\r\nPhần nội dung, tác giả nêu lên \"giá trị của những vụn vặt\". Hà Nội được coi là thành phố của những sự vụn vặt đẹp đẽ và bé xinh, sự hoành tráng và nguy nga không tồn tại. Việc đi tìm những mẩu đẹp đẽ ấy, cũng như những hạt bụi vàng được Pautovski gom góp thành một bông hồng vàng kỳ diệu, là điều có thể làm được.\r\n\r\n“Không ngơi nghỉ, không phút nào như phút nào, ngày hôm nay Hà Nội sống hối hả, như cuống quýt giành lại những năm tháng chậm chạp đã qua.\"\r\n\r\n\r\nGiá sản phẩm trên đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '48000', '48000', 'Nhà xuất bản trẻ', '1654572615-book.png', 50, 1, 0, 3, 4, '2022-06-06 13:30:15', '2022-06-06 13:30:15'),
(11, 'Đàn bà đẹp', '\"Muốn đi nhảy, đương nhiên phải biết võ vẽ vài điệu. Muốn biết phải học. Muốn học phải có bạn tập chung. Mà khiêu vũ là môn nghệ thuật rất dễ nảy sinh tình cảm rấc rối. Này là nắm tay. Ôm eo. Vịn vai. Tay giữ chặt làm khung. Đan chân vào nhau. Khít rịt. Lại thơm nức sạch sẽ. Lại nhạc êm đèn mờ. Hỏi sao mà không thấy luyến lưu bịn rịn cho được. Chẳng có nơi nào giữa xã hội văn minh này mà khoảng cách giữa đàn ông và đàn bà lại gần và thoải mái đến vậy. Chỉ cầ một phút ba mươi giây là có thể ôm sát rạt, mắt trong mắt, tai bên tai, thì thầm, xin số điện thoại, rủ rê, hẹn hò. Nhiều lúc đi sàn thôi, thì chưa \"đã\". Phải tụ tập thêm ở ngoài quán xá, chỗ này chỗ nọ\"\r\n\r\n(Trích Đàn bà trên sàn)\r\n\r\nTôi giờ là bà mẹ hai con. Thi thoảng đi đâu mới đôi ngày, đã thấy mình da diết nhớ căn phòng ngủ thoang thoảng mù nước tè con trẻ. Biết mình hụt hẫng khi bước vào phòng ăn buffet đầy ăm ắp của khách sạn, tự hỏi bếp nhà mấy hôm nay chồng con có vắng lạnh, hiu buồn. Để ngày trở về, ngả lưng trên tấm đệm lúc nào cũng vương vãi đồ chơi, túi bụi vừa loay hoay nấu nướng vừa quát con, vậy mà thấy yên lòng.\r\n\r\n(Trích Về nhà)\r\n\r\nGiá sản phẩm trên đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '67700', '64315', 'Nhà xuất bản phụ nữ', '1654572658-book.png', 134, 1, 5, 4, 4, '2022-06-06 13:30:58', '2022-06-06 13:30:58'),
(12, 'Lặng yên dưới vực sâu', '“… tại sao con người lại làm thế này với nhau? Súa muốn hỏi, vì sao Súa chấp nhận làm vợ Phống rồi, ở yên trong nhà họ Tráng rồi mà Phống vẫn không vừa lòng? Phống còn muốn Súa như một con bò cái, khi chồng leo lên người phải rống lên từng cơn. Phống là người hay không phải người?… Súa thấy sợ Phống. Thấy ghê tởm. Không ai dạy Súa khi làm vợ thì phải biết kêu lên khi chồng nó leo lên người. Tại sao đàn bà lại phải kêu lên như bò? Súa rùng mình, buồn nôn.”\r\n\r\n“… tại sao con người lại làm thế này với nhau?” Lặng yên dưới vực sâu, với lối viết chân thực đến gai người, không ngừng tra vấn chúng ta bằng câu hỏi nhức nhối ấy. Tình yêu bị chà đạp, thân phận bị giày vò, hy vọng bị dối lừa, những con người mộc mạc nhưng mãnh liệt trong thẳm sâu tâm hồn nơi vùng cao U Khố Sủ đau đớn đi tìm câu trả lời, để rồi, như một định mệnh oan nghiệt, bị lôi tuột xuống đáy vực sâu hun hút, tối, và lặng câm. Tiểu thuyết của Đỗ Bích Thúy là nỗi trăn trở khôn nguôi về cuộc sống với biết bao những bi kịch, những ngang trái rình rập nuốt chửng con người.', '58000', '56840', 'Văn học Việt Nam', '1654572715-book.png', 154, 1, 2, 4, 11, '2022-06-06 13:31:55', '2022-06-06 13:31:55'),
(13, 'Tiếng đàn môi sau bờ rào đá', 'Tập truyện ngắn của nhà văn Đỗ Bích Thúy mang đến cho người đọc không gian lãng mạn, với những câu chuyện rung động về tình người miền núi.\r\n21 truyện ngắn trong tập truyện Tiếng đàn môi sau bờ rào đá là 21 khúc tâm tình của một người con miền núi. Đó là những khúc tâm tình chân thành, cháy bỏng về những vùng đất mờ sương, gần trời xa đất. Ở nơi ấy, có những ngôi nhà sàn chín bậc cầu thang, có tiếng sáo của chàng trai gửi bạn tình để bộc bạch nỗi lòng (Mần tang mọc trong thung lũng). Ở nơi ấy có người con xa quê bao năm nhưng vẫn không bao giờ quên được món rau đắng xào, những đêm theo cha bắt cá trên dòng suối của rừng (Đêm cá nổi, Ngải đắng mọc trên núi). Ở nơi ấy có tình yêu son sắt của người vợ dành cho chồng, tình yêu bao la của cha mẹ dành cho con, anh chị em dành cho nhau, tình yêu của người miền núi dạt dào, ăm ắp như bát nước đầy (Tiếng đàn môi sau bờ rào đá, Gió không ngừng thổi, cạnh bếp có cái muôi gỗ).\r\n\r\nGiá sản phẩm trên đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', '168000', '109200', 'Nhà xuất bản liên Việt', '1654572908-book.png', 245, 1, 35, 4, 6, '2022-06-06 13:35:08', '2022-06-06 13:35:08'),
(14, 'Những tọa độ song song', 'Sâu sắc. Thấu hiểu. Dịu dàng. Và đầy ắp những khoảnh khắc lắng đọng rất Nguyễn Mai Chi.\r\n\r\nĐó là những gì bạn có thể bắt gặp ở “Những tọa độ song song’’ – phiên bản tái bản đặc biệt của “5 múi giờ, 10 tiếng bay và một cái khép mi”.\r\n\r\nVới một diện mạo hoàn toàn mới bằng ý tưởng “lạ” từ ban biên tập Bloom Books, Những tọa độ song song sẽ gửi đến bạn cùng lời nhắc nhớ về sợi dây liên kết bền bỉ, xuyên qua không gian và thời gian giữa quá khứ và hiện tại, giữa Paris và Hà Nội – hai “tọa độ an trú’’ gắn liền với tác giả Mai Chi. Cùng với nội dung có bổ sung những trang viết chưa từng đăng tải ở bất cứ đâu, Bloom tin rằng sự đồng cảm mà Những tọa độ song song mang đến sẽ không chỉ dừng lại ở những câu chuyện mà còn dẫn lối cho bạn quay về với những tọa độ quen thuộc của cảm xúc – đó là nơi tâm hồn bạn thuộc về, chứ không phải của bất kỳ ai khác.\r\n\r\n“Người ta có thể làm rất nhiều thứ với chiếc ghế sắt sơn xanh trong vườn Tuileries. Ngồi lên đó và đọc sách, ngắm nhìn bầu trời, ngắm nhìn người đời, nhìn đàn vịt bơi lội trong đài phun nước, hàng người dài trước xe bán kem hiệu Amorino, trước bảo tàng Musée de l\'Orangerie và trung tâm Jeu de Paume, hay bấm máy chụp trộm đôi tình nhân đang thủ thỉ trên một chiếc ghế khác gần đó.', '119000', '101150', 'Nhà xuất bản thế giới', '1654572961-book.png', 432, 1, 15, 5, 7, '2022-06-06 13:36:01', '2022-06-06 13:36:01'),
(15, 'Thế giới qua đôi mắt cá của cô ấy', 'Đôi khi, những từ ngữ tuột khỏi tôi.\r\nChúng bay lơ lửng phía trên đầu tôi, nhưng khó mà nắm bắt được. Việc này diễn ra ngày một thường xuyên. Tôi không biết phải nói gì để bắt đầu một chủ đề, hay không biết phải đáp lại như thế nào trong một cuộc hội thoại nhiều phía. Câu chuyện sẽ cứ thế tiếp diễn giữa những người còn lại, phần của tôi bị bỏ dở, cho tới khi ai đó hướng câu hỏi thẳng về phía tôi, trực diện, tôi không còn cách nào khác ngoài việc phải cố sức kéo những ý nghĩ trong không trung kia xuống càng nhanh càng tốt, lôi chúng đi qua đường tai mũi họng, trượt ra ngoài một cách trơn tru dưới dạng âm thanh, để những ánh mắt kia không còn dán vào tôi, chờ đợi', '78000', '74880', 'Nhà xuất bản trẻ', '1654573001-book.png', 111, 1, 4, 5, 5, '2022-06-06 13:36:41', '2022-06-06 13:36:41'),
(16, '5 múi giờ, 10 tiếng bay và một cái khép mi', 'Hơn cả việc sợ mình sẽ trở thành một người an phận và thỏa hiệp với mọi thứ, em thấy sợ khi nghĩ rằng mình chính là người có thể đã, đang hoặc sẽ làm điều tương tự với anh: trở thành bức tường ngăn cách giữa anh và những gì anh muốn làm.\r\n\r\nEm không muốn sự tiện nghi vừa đủ trong căn hộ nhỏ của chúng ta tới một ngày nào đó sẽ khiến anh cảm thấy ngột ngạt và nhốt lại giữa bốn bức tường của nó những giấc mơ của anh, những giấc mơ đã tạo nên người con trai mà em yêu ngay từ những ngày đầu quen nhau.\r\n\r\nSự an toàn và ấm cúng, chúng làm con người ta không muốn cựa quậy, chỉ ở yên một chỗ và tận hưởng. Cảm giác an toàn là một cái bẫy, nhưng ngay cả khi ta nhận ra mình đang bị trói chặt trong đó, ta cũng không muốn vùng chạy', '140000', '120400', 'Nhà xuất bản trẻ', '1654573037-book.png', 123, 1, 14, 5, 4, '2022-06-06 13:37:17', '2022-06-06 13:37:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_carts`
--

CREATE TABLE `tb_carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tb_carts`
--

INSERT INTO `tb_carts` (`id`, `username`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2022-06-11 03:28:32', '2022-06-11 03:28:32'),
(2, 'user', '2022-06-11 03:28:43', '2022-06-11 03:28:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_categories`
--

CREATE TABLE `tb_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tl_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tb_categories`
--

INSERT INTO `tb_categories` (`id`, `tl_name`, `created_at`, `updated_at`) VALUES
(1, 'Văn Học', '2022-05-22 03:26:32', '2022-05-22 03:26:32'),
(2, 'Thiếu Nhi', '2022-05-22 03:26:39', '2022-05-22 03:26:39'),
(3, 'Kinh Tế', '2022-05-22 03:26:46', '2022-05-22 03:26:46'),
(4, 'Tâm lý - Kỹ năng sống', '2022-05-22 03:26:57', '2022-05-22 03:26:57'),
(5, 'Nuôi dạy con', '2022-05-22 03:27:05', '2022-05-22 03:27:05'),
(6, 'Tiểu thuyết', '2022-05-22 03:27:12', '2022-05-22 03:27:12'),
(7, 'Giáo khoa - Tham khảo', '2022-05-22 03:27:22', '2022-05-22 03:27:22'),
(8, 'Từ điển', '2022-05-22 03:27:28', '2022-05-22 03:27:28'),
(9, 'Văn hóa - Nghệ thuật - Du lịch', '2022-05-22 03:27:42', '2022-05-22 03:27:42'),
(10, 'Chính trị - Pháp luật', '2022-05-22 03:27:56', '2022-05-22 03:27:56'),
(11, 'Tiểu sử hồi ký', '2022-05-22 03:28:07', '2022-05-22 03:28:07');

-- --------------------------------------------------------
Nguyên Xá - Bắc Từ Liêm
--
-- Cấu trúc bảng cho bảng `tb_detail_bills`
--

CREATE TABLE `tb_detail_bills` (
  `bill_id` bigint(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `book_quantity` int(11) NOT NULL,
  `book_price` int(11) NOT NULL,
  `book_total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_detail_carts`
--

CREATE TABLE `tb_detail_carts` (
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `book_id` bigint(20) UNSIGNED NOT NULL,
  `gh_amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` int(11) NOT NULL DEFAULT 0,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `email_verified_at`, `phone`, `address`, `isAdmin`, `password`, `avatar`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Đàm Văn Hiếu', 'admin', 'hieudam442@gmail.com', NULL, '0384144442', 'Nguyên Xá - Minh Khai - Bắc Từ Liêm', 1, '$2y$10$frMaJ/P80bxq1xF2e7uP3exOTGPN1z2srS0S9d0TAJy7QZc3Q5HDi', '1654943312-user.jpg', NULL, '2022-06-11 03:28:32', '2022-06-11 03:28:32'),
(2, 'Lại Đức Hiển', 'user', 'hiena@gmail.com', NULL, '0384144447', 'Minh Khai - Bắc Từ Liêm', 0, '$2y$10$8JsNBG6FvlpZfqaqlnUF5.tAvNRlHbOpL6tKv8izVDBDXorWiT1q.', '1654943323-user.jpg', NULL, '2022-06-11 03:28:43', '2022-06-11 03:28:43');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `tb_authors`
--
ALTER TABLE `tb_authors`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_bills`
--
ALTER TABLE `tb_bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_bills_cart_id_foreign` (`cart_id`);

--
-- Chỉ mục cho bảng `tb_books`
--
ALTER TABLE `tb_books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_books_author_id_foreign` (`author_id`),
  ADD KEY `tb_books_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `tb_carts`
--
ALTER TABLE `tb_carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_carts_username_foreign` (`username`);

--
-- Chỉ mục cho bảng `tb_categories`
--
ALTER TABLE `tb_categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_detail_bills`
--
ALTER TABLE `tb_detail_bills`
  ADD PRIMARY KEY (`bill_id`,`book_id`),
  ADD KEY `tb_detail_bills_book_id_foreign` (`book_id`);

--
-- Chỉ mục cho bảng `tb_detail_carts`
--
ALTER TABLE `tb_detail_carts`
  ADD PRIMARY KEY (`cart_id`,`book_id`),
  ADD KEY `tb_detail_carts_book_id_foreign` (`book_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tb_authors`
--
ALTER TABLE `tb_authors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tb_bills`
--
ALTER TABLE `tb_bills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tb_books`
--
ALTER TABLE `tb_books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `tb_carts`
--
ALTER TABLE `tb_carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tb_categories`
--
ALTER TABLE `tb_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tb_bills`
--
ALTER TABLE `tb_bills`
  ADD CONSTRAINT `tb_bills_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `tb_carts` (`id`);

--
-- Các ràng buộc cho bảng `tb_books`
--
ALTER TABLE `tb_books`
  ADD CONSTRAINT `tb_books_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `tb_authors` (`id`),
  ADD CONSTRAINT `tb_books_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `tb_categories` (`id`);

--
-- Các ràng buộc cho bảng `tb_carts`
--
ALTER TABLE `tb_carts`
  ADD CONSTRAINT `tb_carts_username_foreign` FOREIGN KEY (`username`) REFERENCES `users` (`username`);

--
-- Các ràng buộc cho bảng `tb_detail_bills`
--
ALTER TABLE `tb_detail_bills`
  ADD CONSTRAINT `tb_detail_bills_bill_id_foreign` FOREIGN KEY (`bill_id`) REFERENCES `tb_bills` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tb_detail_bills_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `tb_books` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tb_detail_carts`
--
ALTER TABLE `tb_detail_carts`
  ADD CONSTRAINT `tb_detail_carts_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `tb_books` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tb_detail_carts_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `tb_carts` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
