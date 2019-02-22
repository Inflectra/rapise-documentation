from sklearn.feature_extraction.text import TfidfVectorizer
import os

src_folder = "ocr"
documents = []
file_list = os.listdir(src_folder)

for file_name in file_list:
    with open(src_folder + "/" + file_name, encoding='utf-8') as input:
        documents.append(input.read().replace("\n", " "))

tfidf = TfidfVectorizer().fit_transform(documents)
pairwise_similarity = tfidf * tfidf.T

processed = set()

for i in range(pairwise_similarity.shape[0]):
    has_match = False
    if file_list[i] in processed:
        continue
    for j in range(pairwise_similarity.shape[1]):
        if file_list[j] in processed:
            continue
        if i != j:
            similarity = pairwise_similarity[i,j]
            if similarity > 0.9:
                if not has_match:
                    print(file_list[i])
                    has_match = True
                    processed.add(file_list[i])
                print ("\t" + file_list[j] + "\t" + str(similarity))
                processed.add(file_list[j])

