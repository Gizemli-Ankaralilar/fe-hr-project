// src/pages/Home.js

import React, { useState } from 'react';
import './Home.scss';

function Home() {
  const [sections, setSections] = useState([
    {
      title: 'Sprint-1',
      expanded: false,
      checked: false,
      subSections: [
        {
          title: 'Kayıt ol sayfası yapılsın.',
          expanded: false,
          checked: true,
          subSections: [
            {
              title: 'Şirket yöneticisi ve ziyaretçi için iki ayrı form yapılacak.',
              expanded: false,
              checked: true,
            },
            {
              title: 'Şirket yöneticisi formunda şirketle ilgili bilgiler de istenecek (şirket vergi no vb.)',
              expanded: false,
              checked: true,
            },
            {
              title: 'Şirket yöneticisi vergi no girince otomatik olarak şirket yöneticisi olarak kayıt olacak eğer girilmediyse ziyaretci olarak kayıt olacak.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Kayıt olan şirket yöneticisi ise admine istek gitmelidir.',
              expanded: false,
              checked: true,
            },
          ],
        },

        {
          title: 'Giriş Sayfası istiyorum.',
          expanded: false,
          checked: true,
          subSections: [
            {
              title: 'Giriş yapan kişinin rolüne göre sayfalara yönlendirilecektir. Eğer adminse admin sayfasına personel ise personel sayfasına gidecek.',
              expanded: false,
              checked: true,
            },
            {
              title: 'Giriş yapan Ziyaretçi ise ana sayfaya gidecek)',
              expanded: false,
              checked: true,
            },
          ],
        },
        {
          title: 'Kayıt olan ziyaretçiye aktivasyon maili gitsin.',
          expanded: false,
          checked: true,
          subSections: [
            {
              title: 'Eğer ziyaretçi kayıt oluyorsa ziyaretçi mailine aktivasyon linki gitmelidir.',
              expanded: false,
              checked: true,
            },
            {
              title: 'Eğer kayıt olan şirket yöneticisi ise bu işlemin onayı admin tarafından admin sayfasında gerçekleştirilmelidir.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Admin onayladıktan sonra şirket yöneticisine "işleminiz onaylandı" gibi bir mail gitmelidir. ',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Şirket Yöneticisi Sayfası Yapılsın.',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Şirket yöneticisi giriş yaptığında bu sayfaya yönlendirilmeli.',
              expanded: false,
              checked: true,
            },
            {
              title: 'Şirket yöneticisi sayfasında şirket bilgileri görüntülenecek. Bu bilgileri düzenlemek için bir düzenle butonu olacak.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Şirket yöneticisi sayfasında Çalışan Listesi olacak (sadece görüntülenecek)',
              expanded: false,
              checked: false,
            },
            {
              title: 'Şirket yöneticisi sayfasında Çalışan Listesi olacak (sadece görüntülenecek)',
              expanded: false,
              checked: false,
            },
            {
              title: 'Şirket yöneticisi sayfasında Çalışan Listesi olacak (sadece görüntülenecek)',
              expanded: false,
              checked: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Sprint-2',
      expanded: false,
      checked: false,
      subSections: [
        {
          title: 'Sprint1 den kalanlar',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Login islemleri duzeltilecek. Ve sayfalara yonlendirecek',
              expanded: false,
              checked: false,
            },
            {
              title: 'register formunda validasyon islemleri gosterilecek,',
              expanded: false,
              checked: false,
            },
            {
              title: 'sirket yoneticisi sayfasi icin backend frontend baglantisi kurulacak',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Admin Sayfası Tasarlanacak',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Admin giris yaptiginda -> kendi yoneticisi sayfasina ulasmalidir.',
              expanded: false,
              checked: false,
            },
            {
              title: 'İki adet sayfa (tap,sayfa,model size bağlı) olacak. Burada iki kisim olacak',
              expanded: false,
              checked: false,
            },
            {
              title: 'kayit olmak isteyen sirket yoneticisinin onaylandigi kisim olacak',
              expanded: false,
              checked: false,
            },
            {
              title: 'yorum onay kısmı olacak, yorumlar sirkete yapılacak',
              expanded: false,
              checked: false,
            },
            {
              title: 'yorumlar yayinlanmadan once admin onayindan gececek',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Personel Sayfası istiyorum.',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Personel giris yaptiginda kendisine ait personel sayfasina yonlendirilmelidir.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Burada personel ad soyad email telefon bilgileri Personelin çalıştığı şirket Personelin vardiya ve mola bilgileri Personelin fotoğrafı Şirketin resmi tatil bilgileri Personel maaşı Şirket ik iletişim bilgileri vb. bilgiler bulunmalıdır.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Personel kendien ait sayfalarda yanlizca ismini soyismini ve telefonu vb. gibi bilgileri guncelleyebilir (without maas,)  birde personel yanlizca kendi calistigi sirkete yorum yapabilir',
              expanded: false,
              checked: false,
            },
            {
              title: 'yorumlar admin tarafindan onaylanacak Uygunsuz yorumlar admin tarafindan kaldirilmalidir.',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Şirket yöneticisi rol değişikliği yapabilsin.',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Sirket yoneticisi sirket sayfasinda bir buton araciligiyla rolunu degistirerek kendi personel sayfasina eklemelidir ve ayni sekildi, personel sayfasindan sirket yoneticisi sayfasina gitmelidir',
              expanded: false,
              checked: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Sprint-3',
      expanded: false,
      checked: false,
      subSections: [
        {
          title: 'Sprint-2 den kalanlar',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'kayıt sonrası kullanıcıya bilgi gösterilecek',
              expanded: false,
              checked: false,
            },
            {
              title: 'kayıt sonrası rol bilgileri backand de düzenlenicek',
              expanded: false,
              checked: false,
            },
            {
              title: 'validasyonlar düzenlenecek ve gösterilecek',
              expanded: false,
              checked: false,
            },
            {
              title: 'Şirket yöneticisi sayfası yapılacak',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Anasayfa yapısı istiyorum',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Ziyaretçi üye olabilir ve giriş yapabilir. Anasayfaya yönlendirilecek',
              expanded: false,
              checked: false,
            },
            {
              title: 'Bu sayfa da site bilgileri, şirketler listelenecek.Platformun özellikleri(kuruluş bilgileri, ne amaca hizmet ettiği gibi bilgiler)',
              expanded: false,
              checked: false,
            },
            {
              title: 'Ziyeretçi rolü: Ziyaretçi bir şirkete tıkladığın da o şirketle ilgili bilgilerin göründüğü sayfaya yönlendirilmelidir.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Ziyeretçi ana sayfada Şirket ismine göre arama yapabilmelidir.',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Şirket detay sayfası',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Şirkete ait detaylar ve çalışanların yaptuığı yorumlar görülmelidir.',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Şirket Yönetici sayfasının güncellenmesini istiyorum',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Çalışanların güncellenmesi işlemlerinin ve silme işlemlerinin yapılması gerekli.(Maaş güncellemesi, vardiya .vb)',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Personel İzinleri Güncellemesi',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Personel bu sayfaya giderek izin talebin de bulunmalıdır.',
              expanded: false,
              checked: false,
            },
            {
              title: 'Bu talep şirket yöneticisi tarafından onaylanmalıdır.',
              expanded: false,
              checked: false,
            },
            {
              title: 'İzin türü başlangıç bitiş tarihi, talep tarihi, gün sayısı, onay durumu cevaplanma tarihi bulunmalıdır.',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'Sisteme uzaktan erişim istiyorum',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'Cloud ayarları',
              expanded: false,
              checked: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Sprint-4',
      expanded: false,
      checked: false,
      subSections: [
        {
          title: 'BACKLOG 1',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
              checked: false,
            },
            {
              title: 'İş 2',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'BACKLOG 2',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
              checked: false,
            },
            {
              title: 'İş 2',
              expanded: false,
              checked: false,
            },
          ],
        },
        {
          title: 'BACKLOG 3',
          expanded: false,
          checked: false,
          subSections: [
            {
              title: 'İş 1',
              expanded: false,
              checked: false,
            },
            {
              title: 'İş 2',
              expanded: false,
              checked: false,
            },
          ],
        },
      ],
    },
  ]);

  const toggleSection = (section) => {
    section.expanded = !section.expanded;
    setSections([...sections]);
  };

  return (
      <div className="home-container">
        <h1>İnsan Kaynakları Yönetimi Projesi</h1>
        {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="section">
              <div
                  className={`section-title ${section.expanded ? 'active' : ''}`}
                  onClick={() => toggleSection(section)}
              >
                <input type="checkbox" checked={section.checked} className="custom-checkbox" />
                <span>{section.title}</span>
              </div>
              {section.expanded && section.subSections && (
                  <div className="sub-sections">
                    {section.subSections.map((subSection, subSectionIndex) => (
                        <div key={subSectionIndex} className="sub-section">
                          <div
                              className={`sub-section-title ${subSection.expanded ? 'active' : ''}`}
                              onClick={() => toggleSection(subSection)}
                          >
                            <input type="checkbox" checked={subSection.checked} className="custom-checkbox" />
                            <span>{subSection.title}</span>
                          </div>
                          {subSection.expanded && subSection.subSections && (
                              <div className="sub-sub-sections">
                                {subSection.subSections.map((subSubSection, subSubSectionIndex) => (
                                    <div key={subSubSectionIndex} className="sub-sub-section">
                                      <div
                                          className={`sub-sub-section-title`}
                                      >
                                        <input type="checkbox" checked={subSubSection.checked} className="custom-checkbox" />
                                        <span>{subSubSection.title}</span>
                                      </div>
                                    </div>
                                ))}
                              </div>
                          )}
                        </div>
                    ))}
                  </div>
              )}
            </div>
        ))}
      </div>
  );
}

export default Home;